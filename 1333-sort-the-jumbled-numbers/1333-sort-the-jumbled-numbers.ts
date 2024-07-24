function sortJumbled(mapping: number[], nums: number[]): number[] {
    let map=new Map<number,number>()
    let n=nums.length
    for(let i=0;i<n;i++){
        let temp=`${nums[i]}`
        let element=0
        for(let j=0;j<temp.length;j++){
            element=element*10+mapping[+(""+temp.charAt(j))]
        }
        console.log(element)
        map.set(nums[i],element)
    }
    return nums.sort((a,b)=>(map.get(a)!=map.get(b))?map.get(a)-map.get(b):nums.indexOf(a)-nums.indexOf(b))
}