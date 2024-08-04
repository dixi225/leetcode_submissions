/**
 Do not return anything, modify board in-place instead.
 */
function dfs(arr:string[][],isVisited:boolean[][],row:number,col:number){
    if(row<0||col<0||row>=arr.length||col>=arr[0].length||isVisited[row][col]==true||arr[row][col]=="X") return
    isVisited[row][col]=true
    arr[row][col]="o"
    dfs(arr,isVisited,row-1,col)
    dfs(arr,isVisited,row+1,col)
    dfs(arr,isVisited,row,col+1)
    dfs(arr,isVisited,row,col-1)
}
function solve(board: string[][]): void {
    let n=board.length
    let m=board[0].length
    let isVisited:any[]=[]
    for(let i=0;i<n;i++){
        let inner:boolean[]=new Array<boolean>(m)
        inner.fill(false)
        isVisited.push(inner)
    } 
    for(let i=0;i<n;i++){
        if(board[i][0]=="O"&&!isVisited[i][0]) dfs(board,isVisited,i,0)
        if(board[i][m-1]=="O"&&!isVisited[i][m-1]) dfs(board,isVisited,i,m-1)
    }
    for(let j=0;j<m;j++){
        if(board[0][j]=="O"&&!isVisited[0][j]) dfs(board,isVisited,0,j)
        if(board[n-1][j]=="O"&&!isVisited[n-1][j]) dfs(board,isVisited,n-1,j)
    }    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j]=="O") board[i][j]="X"
            if(board[i][j]=="o") board[i][j]="O"
        }    
    }
};