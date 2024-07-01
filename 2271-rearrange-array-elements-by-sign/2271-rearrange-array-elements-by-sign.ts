function rearrangeArray(nums: number[]): number[] {
    let ans:number[]=[]
    let n=nums.length
    let pos=0
    let neg=0
    for(let i=0;i<n-1;i=i+2){
        while(pos<n&&nums[pos]<0) pos++
        while(neg<n&&nums[neg]>=0) neg++
        if(pos<n){
            ans[i]=nums[pos]
            pos++}
        if(neg<n){ 
            ans[i+1]=nums[neg]
            neg++}
    }
    return ans
};