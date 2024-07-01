function longestConsecutive(nums: number[]): number {
    let n=nums.length
    if(n==0) return 0
    nums.sort((a,b)=>a-b)
    let count=1
    let ans=1
    for(let i=0;i<n-1;i++){
        if(nums[i]+1==nums[i+1]) count++
        else if(nums[i]!=nums[i+1]){
            ans=Math.max(ans,count)
            count=1
        }
    }
    ans=Math.max(count,ans)
    return ans
};