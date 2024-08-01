function helper(arr: number[][],isVisited: boolean[][],i:number,j:number,color:number,prev:number){
    if(i>=arr.length||j>=arr[0].length||i<0||j<0) return
    if(isVisited[i][j]==true||arr[i][j]!=prev) return
    isVisited[i][j]=true
    arr[i][j]=color
    helper(arr,isVisited,i+1,j,color,prev)
    helper(arr,isVisited,i-1,j,color,prev)
    helper(arr,isVisited,i,j+1,color,prev)
    helper(arr,isVisited,i,j-1,color,prev)
}

function floodFill(arr: number[][], sr: number, sc: number, color: number): number[][] {
    let n=arr.length
    let m=arr[0].length
    let isVisited:any[]=[]
    for(let i=0;i<n;i++){
        let inner:boolean[]=new Array<boolean>(m)
        inner.fill(false)
        isVisited.push(inner)
    }   
    helper(arr,isVisited,sr,sc,color,arr[sr][sc])
    return arr
};
