function singleNumber(nums: number[]): number {
    let n=nums.length
    if(n==1) return nums[0]
    nums.sort()
    for(let i=0;i<n-1;i=i+2){
        if(nums[i]!=nums[i+1]) return nums[i]
    }
    return nums[n-1]
};
