function sortPeople(names: string[], heights: number[]): string[] {
    let map=new Map<number,string>()
    let n=names.length
    for(let i=0;i<n;i++){
        map.set(heights[i],names[i])
    }
    heights.sort((a,b)=>{return b-a})
    let ans:string[]=[]
    for(let i=0;i<n;i++) ans[i]=map.get(heights[i])
    return ans
};