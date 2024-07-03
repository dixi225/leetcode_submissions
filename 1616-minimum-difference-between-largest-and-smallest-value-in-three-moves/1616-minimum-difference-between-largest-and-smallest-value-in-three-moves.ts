function minDifference(nums: number[]): number {
    if(nums.length<=4){
        return 0
    }
    let n=nums.length
    nums.sort((a,b)=>a-b)
    let ans= nums[n-1]-nums[0]
    ans=Math.min(ans,nums[n-1]-nums[3])
    ans=Math.min(ans,nums[n-4]-nums[0])
    ans=Math.min(ans,nums[n-3]-nums[1])
    ans=Math.min(ans,nums[n-2]-nums[2])
    return ans
};