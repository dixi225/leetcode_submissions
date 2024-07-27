function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
      const ALPHABET_SIZE = 26;
    const INF = Infinity;

    const dist: number[][] = Array.from({ length: ALPHABET_SIZE }, () => Array(ALPHABET_SIZE).fill(INF));

    for (let i = 0; i < ALPHABET_SIZE; i++) {
        dist[i][i] = 0;
    }

    for (let i = 0; i < original.length; i++) {
        const from = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const to = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
        dist[from][to] = Math.min(dist[from][to], cost[i]);
    }

    for (let k = 0; k < ALPHABET_SIZE; k++) {
        for (let i = 0; i < ALPHABET_SIZE; i++) {
            for (let j = 0; j < ALPHABET_SIZE; j++) {
                if (dist[i][k] < INF && dist[k][j] < INF) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }

    let totalCost = 0;
    for (let i = 0; i < source.length; i++) {
        const srcChar = source[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const tgtChar = target[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if (dist[srcChar][tgtChar] === INF) {
            return -1;
        }

        totalCost += dist[srcChar][tgtChar];
    }

    return totalCost;
};