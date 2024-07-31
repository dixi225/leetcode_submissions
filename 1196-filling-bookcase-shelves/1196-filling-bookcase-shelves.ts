function minHeightShelves(books: number[][], shelfWidth: number): number {
    const dp = Array(books.length + 1).fill(0);

    for (let i = 1; i <= books.length; i++) {
        let min = dp[i - 1] + books[i - 1][1];
        let height = books[i - 1][1];
        let width = books[i - 1][0];
        let j = i - 2;
        while (j >= 0 && width + books[j][0] <= shelfWidth) {
            width += books[j][0];
            height = Math.max(height, books[j][1]);
            min = Math.min(min, height + dp[j]);
            j--;
        }
        dp[i] = min;
    }
    return dp[books.length];
};