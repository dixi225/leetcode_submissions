function passThePillow(n: number, t: number): number {
    if(n>t) return t+1
    let t1=0
    let i=1
    let sign=1
    while(t1!=t){
        i=(sign==1)?i+=1:i-=1
        if(i==1||i==n) sign=(sign==1)?-1:1
        t1++
    }
    return i
};