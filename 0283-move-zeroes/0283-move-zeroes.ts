/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let n=nums.length
    let i=0
    let sizeOfZero=0
    while(i<n){
        if(nums[i]==0) sizeOfZero++
        else if(sizeOfZero>0){
            let temp=nums[i]
            nums[i]=nums[i-sizeOfZero]
            nums[i-sizeOfZero]=temp
        }
        i++
    }
};