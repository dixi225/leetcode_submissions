function isLucky(matrix:number[][],i:number,j:number):boolean{
    let toBeChecked=matrix[i][j]
    for(let i1=0;i1<matrix.length;i1++){
        if(matrix[i1][j]>toBeChecked) return false
    }
    for(let j1=0;j1<matrix[0].length;j1++){
        if(matrix[i][j1]<toBeChecked) return false
    }    
    return true
}

function luckyNumbers (matrix: number[][]): number[] {
    let n=matrix.length
    let m=matrix[0].length
    let ans=[]
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(isLucky(matrix,i,j)) ans.push(matrix[i][j])  
        }
    }
    return ans
};