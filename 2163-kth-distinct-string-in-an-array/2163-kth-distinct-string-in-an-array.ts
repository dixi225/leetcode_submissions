function kthDistinct(arr: string[], k: number): string {
    let map:Map<String,Number>=new Map()
    let n=arr.length
    for(let i=0;i<n;i++){
        if(!map.has(arr[i])) map.set(arr[i],1)
        else map.set(arr[i],-1)
    }
        for(let i=0;i<n;i++){
            if(map.get(arr[i])==1) k--
            if(k==0) return arr[i]
    }
    return ""
};