function frequencySort(nums: number[]): number[] {
    let map=new Map<number,number>;
    let n=nums.length;
    for(let i=0;i<n;i++) map.set(nums[i],(map.get(nums[i])||0)+1) 
    return nums.sort((a,b)=>map.get(a) != map.get(b) ? map.get(a) - map.get(b) : b - a)
};