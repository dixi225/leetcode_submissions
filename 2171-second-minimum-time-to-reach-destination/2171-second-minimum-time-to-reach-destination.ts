function secondMinimum(n: number, edges: number[][], time: number, change: number): number {
    const adj: number[][] = Array.from({ length: n + 1 }, () => [])

    // Build the adjacency list
    for (const [u, v] of edges) {
        adj[u].push(v)
        adj[v].push(u)
    }

    const queue: [number, number][] = []
    const firstDist: number[] = Array(n + 1).fill(-1)
    const secondDist: number[] = Array(n + 1).fill(-1)

    // Start with node 1, with its minimum distance
    queue.push([1, 1])
    firstDist[1] = 0

    while (queue.length > 0) {
        const [currentNode, visit] = queue.shift()!
        let currentTime = visit === 1 ? firstDist[currentNode] : secondDist[currentNode]

        // If the currentTime falls under the red bracket, wait till the path turns green
        if (Math.floor(currentTime / change) % 2 === 1) {
            currentTime = change * (Math.floor(currentTime / change) + 1) + time
        } else {
            currentTime += time
        }

        for (const neighbor of adj[currentNode]) {
            if (firstDist[neighbor] === -1) {
                firstDist[neighbor] = currentTime
                queue.push([neighbor, 1])
            } else if (secondDist[neighbor] === -1 && firstDist[neighbor] !== currentTime) {
                if (neighbor === n) return currentTime
                secondDist[neighbor] = currentTime
                queue.push([neighbor, 2])
            }
        }
    }

    return 0
}