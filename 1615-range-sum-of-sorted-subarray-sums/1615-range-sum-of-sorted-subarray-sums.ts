function rangeSum(nums: number[], n: number, left: number, right: number): number {
    let subSum:number[]=[]
    let mod=Math.pow(10,9)+7
    for(let i=0;i<n;i++){
        let sum=0
        for(let j=i;j<n;j++){
            sum=sum%mod+nums[j]
            subSum.push(sum)
        }
    }
    subSum.sort((a,b)=>(a==b)?a:a-b)
    let ans=0
    for(let i=left-1;i<right;i++) ans=ans%mod+subSum[i]
    return ans
};