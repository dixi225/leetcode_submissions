function findMaxConsecutiveOnes(nums: number[]): number {
    let count=0
    let ans=0
    let n=nums.length
    for(let i=0;i<n;i++){
        if(nums[i]==1) count++
        else{
            ans=Math.max(ans,count)
            count=0
        }
    }
    ans=Math.max(ans,count)
    return ans
};