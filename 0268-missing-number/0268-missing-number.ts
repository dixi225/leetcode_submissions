function missingNumber(nums: number[]): number {
    let n=nums.length
    let sum1=(n*(n+1))/2
    let sum2=0
    for(let i=0;i<n;i++) sum2+=nums[i]
    return sum1-sum2

};