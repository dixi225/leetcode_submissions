function removeDuplicates(nums: number[]): number {
    let n=nums.length
    if(n<=1) return 1
    let i=1
    let j=1
    let toCheck=nums[1]
    while(i<n){
        if(nums[i]!=nums[i-1]){
        nums[j]=nums[i]
        j++
        }
        i++
    }
    return j
};