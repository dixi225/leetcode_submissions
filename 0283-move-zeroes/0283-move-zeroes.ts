/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let n=nums.length
    let i=0
    while(i<n){
        while(i<n&&nums[i]!=0) i++
        if(i==n) return
        let j=i+1
        while(j<n&&nums[j]==0) j++
        if(j==n) return
        let temp=nums[j]
        nums[j]=nums[i]
        nums[i]=temp
        i++
    }
};