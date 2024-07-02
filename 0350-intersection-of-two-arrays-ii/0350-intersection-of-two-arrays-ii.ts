function intersect(nums1: number[], nums2: number[]): number[] {
    let map=new Map<number,number>
    let ans:number[]=[]
    let k=0
    let n1=nums1.length
    let n2=nums2.length
    for(let i=0;i<n1;i++){
        if(!map.has(nums1[i])) map.set(nums1[i],1)
        else map.set(nums1[i],map.get(nums1[i])+1)
    }
    for(let i=0;i<n2;i++){
        if(map.has(nums2[i])&&map.get(nums2[i])!=0){
            ans[k]=nums2[i]
            k++
            map.set(nums2[i],map.get(nums2[i])-1)
        }
    }    
    return ans
};