function minimumPushes(word: string): number {
    let freq:Map<string,number>=new Map()
    let n=word.length
    for(let i=0;i<n;i++){
        freq.set(""+word.charAt(i),(freq.has(""+word.charAt(i)))?freq.get(""+word.charAt(i))+1:1)
    }
    if(freq.size<9) return word.length
    let arr:string[]=[]
    freq.forEach((value,key)=>{
        arr.push(key)
    })
    arr.sort((a,b)=>freq.get(b)-freq.get(a))
    let ans=0
    n=arr.length
    let multi=0
    for(let i=0;i<n;i++){
        if(i+1<=8) multi=1
        else if(i+1>8&&i+1<=16) multi=2
        else if(i+1>16&&i+1<=24) multi=3
        else multi=4
        ans+=multi*freq.get(arr[i])
    }
    return ans
};