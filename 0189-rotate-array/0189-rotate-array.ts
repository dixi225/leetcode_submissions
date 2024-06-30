/**
 Do not return anything, modify nums in-place instead.
 */

function reverseArray(nums:number[],i:number,j:number){
    while(i<j){
        let temp=nums[i]
        nums[i]=nums[j]
        nums[j]=temp
        i++
        j--
    }
}

function rotate(nums: number[], k: number): void {
    let n=nums.length
    if(k==n) return
    reverseArray(nums,0,n-1)
    reverseArray(nums,0,(k-1)%n)
    reverseArray(nums,k%n,n-1)
};