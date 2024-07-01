function majorityElement(nums: number[]): number {
    let count=1
    let majElement:number=nums[0]
    let n=nums.length
    for(let i=1;i<n;i++){
        if(majElement==nums[i]) count++
        else {
            count--
            if(count==0){
            majElement=nums[i]
            count=1
            }}}
    return majElement
};