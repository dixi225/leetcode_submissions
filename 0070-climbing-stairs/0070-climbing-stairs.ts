function climbStairs(n: number): number {
    // if(n==0) return 1
    // else if(n<0) return 0
    // return climbStairs(n-1)+climbStairs(n-2)
    let dp:number[]=[]
    dp[0]=1
    for(let i=1;i<=n;i++){
        let left=dp[i-1]
        let right=(i-2<0)?0:dp[i-2]
        dp[i]=left+right
    }
    return dp[n]
};