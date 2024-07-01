function subarraySum(nums: number[], k: number): number {
    let n:number=nums.length
    let ans=0;
    let sum=0;
    let map=new Map<number,number>
    map.set(0,1)
    for(let i=0;i<n;i++){
        sum+=nums[i]
        if(map.has(sum-k)){
            ans+=map.get(sum-k)
        }
        map.set(sum,map.has(sum)?map.get(sum)+1:1)
    }
    return ans
};