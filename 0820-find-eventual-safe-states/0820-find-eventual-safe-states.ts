function dfs(graph:number[][],vis:boolean[],pathVis:boolean[],index:number,ans:boolean[]):boolean{
    if(pathVis[index]==true) return false
    vis[index]=true
    pathVis[index]=true
    let m=graph[index].length
    for(let i=0;i<m;i++){
        if(!vis[graph[index][i]]){
            if(!dfs(graph,vis,pathVis,graph[index][i],ans)) {   
            return false
            }
        }else if(pathVis[graph[index][i]]) return false
        
    }
    ans[index]=true
    pathVis[index]=false
    return true
}
function eventualSafeNodes(graph: number[][]): number[] {
    let n=graph.length
    let vis:boolean[]=new Array<boolean>(n)
    let pathVis:boolean[]=new Array<boolean>(n)
    let ans:boolean[]=new Array<boolean>(n)
    vis.fill(false)
    ans.fill(false)
    pathVis.fill(false)
    for(let i=0;i<n;i++){
        if(vis[i]==false){
            dfs(graph,vis,pathVis,i,ans)
        }
    }
    let fAns:number[]=[]
    for(let i=0;i<n;i++) if(ans[i]) fAns.push(i)
    return fAns
};