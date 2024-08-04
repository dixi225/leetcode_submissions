function dfs(arr:number[][],isVisited:boolean[][],row:number,col:number){
    if(row<0||col<0||row>=arr.length||col>=arr[0].length||isVisited[row][col]==true||arr[row][col]==0) return
    isVisited[row][col]=true
    arr[row][col]=-1
    dfs(arr,isVisited,row-1,col)
    dfs(arr,isVisited,row+1,col)
    dfs(arr,isVisited,row,col+1)
    dfs(arr,isVisited,row,col-1)
}
function numEnclaves(board: number[][]): number {
    let n=board.length
    let m=board[0].length
    let isVisited:any[]=[]
    for(let i=0;i<n;i++){
        let inner:boolean[]=new Array<boolean>(m)
        inner.fill(false)
        isVisited.push(inner)
    } 
    for(let i=0;i<n;i++){
        if(board[i][0]==1&&!isVisited[i][0]) dfs(board,isVisited,i,0)
        if(board[i][m-1]==1&&!isVisited[i][m-1]) dfs(board,isVisited,i,m-1)
    }
    for(let j=0;j<m;j++){
        if(board[0][j]==1&&!isVisited[0][j]) dfs(board,isVisited,0,j)
        if(board[n-1][j]==1&&!isVisited[n-1][j]) dfs(board,isVisited,n-1,j)
    }    
    let noOf1s=0
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j]==1) noOf1s++
        }    
    }
    return noOf1s
};