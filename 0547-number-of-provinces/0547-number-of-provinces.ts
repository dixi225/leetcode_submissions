function visitor(isConnected: number[][],isVisited:boolean[],i:number):void{
    if(isVisited[i]==true) return
    isVisited[i]=true
    let n=isConnected.length
    for(let j=0;j<n;j++){
        if(isConnected[i][j]==1&&!isVisited[j]) visitor(isConnected,isVisited,j)
    }
}

function findCircleNum(isConnected: number[][]): number {
    let n=isConnected.length
    let isVisited:boolean[]=new Array<boolean>(n)
    isVisited.fill(false)
    let ans=0
    for(let i=0;i<n;i++){
        if(isVisited[i]==false){
            ans++
            visitor(isConnected,isVisited,i)
        }
    } 
    return ans
};