function check(nums: number[]): boolean {
    let n=nums.length
    let count=0
    if(n<=1) return true
    for(let i=0;i<n-1;i++){
        if(nums[i]>nums[i+1]) count++
        if(count>1) return false
    }
    if(nums[0]<nums[n-1]) count++
    if(count>1) return false
    return true
};