function threeConsecutiveOdds(arr: number[]): boolean {
    let n=arr.length
    let count=0
    for(let i=0;i<n;i++){
        if(arr[i]%2!=0) count++
        else if(count>0) count =0
        if(count==3) return true
    }
    return false
};