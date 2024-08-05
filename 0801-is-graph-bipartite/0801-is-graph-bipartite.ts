function dfs(graph:number[][],colors:number[],color:number,index:number){
    if(colors[index]!=-1){
        if(colors[index]==color) return true
        return false
    }
    colors[index]=color
    console.log(index+" "+colors[index])
    color=(color==1)?0:1
    let m=graph[index].length
    for(let i=0;i<m;i++){
        if(colors[graph[index][i]]!=-1&&colors[graph[index][i]]!=color) return false
        else if(colors[graph[index][i]]==-1){
            let ans:boolean=true
            ans=dfs(graph,colors,color,graph[index][i])
            if(!ans) return false
        }
    }
    return true
}
function isBipartite(graph: number[][]): boolean {
    let n=graph.length
    let color:number[]=new Array<number>(n)
    color.fill(-1)
    for(let i=0;i<n;i++){
        let ans=true
        if(color[i]==-1) ans=dfs(graph,color,0,i)
        if(!ans) return false
    }
    return true
};