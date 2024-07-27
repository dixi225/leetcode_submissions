function buildArray(target: number[], m: number): string[] {
    let ans:string[]=[]
    let n=target.length
    if(n==m){
        for(let i=0;i<n;i++) ans.push("Push")
        return ans
    }
    let j=1
    if(j!=target[0]){
        while(j!=target[0])
        {
            ans.push("Push")
            ans.push("Pop")
            j++
        }
    }
    for( let i=0;i<n;i++){
        if(target[i]==j){
            ans.push("Push")
            j++
        }else{
            while(j<target[i]){
                ans.push("Push")
                ans.push("Pop")
                j++
            }
            ans.push("Push")
            j++
        }
    }
    return ans
};