function twoSum(nums: number[], k: number): number[] {
    let ans:number[]=[]
    let map=new Map<number,number>
    let n=nums.length
    for(let i=0;i<n;i++){
        if(map.has(k-nums[i])){
            ans[0]=i
            ans[1]=map.get(k-nums[i])
            return ans
        }
        map.set(nums[i],i)
    }
    return ans
};