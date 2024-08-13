function combinationSum2(candidates: number[], target: number): number[][] {
    const result = []
    candidates.sort((a, b) => a - b)

    const dfs = (i, current, total) => {
        if (total === target) {
            result.push([...current])
            return
        }
        if (i >= candidates.length || total > target) return
        current.push(candidates[i])
        dfs(i + 1, current, total + candidates[i])
        current.pop()
        while (candidates[i] === candidates[i + 1] && i < candidates.length) i++
        dfs(i + 1, current, total)
    }
    dfs(0, [], 0)
    return result
};