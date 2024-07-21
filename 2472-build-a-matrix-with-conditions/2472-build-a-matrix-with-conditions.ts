function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
    const ans: number[][] = Array.from({ length: k }, () => Array(k).fill(0));

    function topological(condition: number[][]): number[] {
        const graph: Map<number, number[]> = new Map();
        const indegree: number[] = Array(k).fill(0);

        for (const [a, b] of condition) {
            if (!graph.has(a)) {
                graph.set(a, []);
            }
            graph.get(a)!.push(b);
            indegree[b - 1]++;
        }

        const que: number[] = [];
        for (let i = 0; i < k; i++) {
            if (indegree[i] === 0) {
                que.push(i + 1);
            }
        }

        const order: number[] = [];
        while (que.length > 0) {
            const temp = que.shift()!;
            order.push(temp);

            if (graph.has(temp)) {
                for (const child of graph.get(temp)!) {
                    indegree[child - 1]--;
                    if (indegree[child - 1] === 0) {
                        que.push(child);
                    }
                }
            }
        }

        return order;
    }

    const row_order = topological(rowConditions);
    const col_order = topological(colConditions);
    
    if (row_order.length < k || col_order.length < k) {
        return [];
    }

    for (const [row, val] of row_order.entries()) {
        const col = col_order.indexOf(val);
        ans[row][col] = val;
    }

    return ans;
}