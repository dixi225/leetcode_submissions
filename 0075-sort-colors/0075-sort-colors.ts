/**
 Do not return anything, modify nums in-place instead.
 */

function sortColors(nums: number[]): void {
    let i=0
    let j=nums.length-1
    let n=j+1
    while(i<j){
        while(i<n&&nums[i]==0) i++
        while(j>=0&&nums[j]!=0) j--
        if(i<j){
            let temp=nums[i]
            nums[i]=nums[j]
            nums[j]=temp
        }
    }
    i=0
    j=nums.length-1
    while(i<j){
        while(i<n&&nums[i]!=2) i++
        while(j>=0&&nums[j]==2) j--
        if(i<j){
            let temp=nums[i]
            nums[i]=nums[j]
            nums[j]=temp
        }
    }
    console.log(nums)
};