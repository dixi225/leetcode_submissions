function helper(arr: string[][],isVisited: boolean[][],i:number,j:number){
    if(i>=arr.length||j>=arr[0].length||i<0||j<0) return
    if(isVisited[i][j]==true||arr[i][j]=="0") return
    isVisited[i][j]=true  
    helper(arr,isVisited,i+1,j)
    helper(arr,isVisited,i-1,j)
    helper(arr,isVisited,i,j+1)
    helper(arr,isVisited,i,j-1)
}

function numIslands(arr: string[][]): number {
    let n=arr.length
    let m=arr[0].length
    let isVisited:any[]=[]
    for(let i=0;i<n;i++){
        let inner:boolean[]=new Array<boolean>(m)
        inner.fill(false)
        isVisited.push(inner)
    }   
    let island=0
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j]=="1"&&isVisited[i][j]==false){
                    island++
                    helper(arr,isVisited,i,j)
                }
            }
        }
    return island
};