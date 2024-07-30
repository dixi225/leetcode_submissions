function subArrayRanges(nums: number[]): number {
    let n=nums.length
    let ans=0
    for(let i=0;i<n;i++){
        let min=nums[i]
        let max=nums[i]
        for(let j=i;j<n;j++){
            max=Math.max(max,nums[j])
            min=Math.min(min,nums[j])
            ans+=max-min
        }
    }
    return ans
};