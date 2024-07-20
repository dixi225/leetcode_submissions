function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    let num:number[][]=[]
    let n=rowSum.length
    let m=colSum.length
    for(let i=0;i<n;i++){
        num.push(new Array<number>())
        for(let j=0;j<m;j++){
            if(rowSum[i]<colSum[j]){
                num[i].push(rowSum[i])
                colSum[j]=colSum[j]-rowSum[i]
                rowSum[i]=0
            }
            else{
                num[i].push(colSum[j])
                rowSum[i]=rowSum[i]-colSum[j]
                colSum[j]=0
            }
        }
    }
    return num
};