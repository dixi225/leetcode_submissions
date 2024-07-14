function removeDuplicates(nums: number[]): number {
    if(nums.length==0) return 0
    if(nums.length==1) return 1
    let i=1
    let j=1
    let n=nums.length
    let toChange=nums[0];
    while(j<n){
        while(j<n&&nums[j]<=toChange) j++
        if(j>=n) break
        nums[i]=nums[j]
        toChange=nums[j]
        i++
        j++
    }
    return i



};