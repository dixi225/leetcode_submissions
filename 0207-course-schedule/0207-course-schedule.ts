function dfs(graph:number[][],isVisited:boolean[],pathVis:boolean[],index:number):boolean{
        if(pathVis[index]) return false
        isVisited[index]=true
        pathVis[index]=true
        let m=graph[index].length
        for(let i=0;i<m;i++){
            if(!isVisited[graph[index][i]]){
                if(!dfs(graph,isVisited,pathVis,graph[index][i])){
                return false
                }
            }else if(pathVis[graph[index][i]]) return false
        }
        pathVis[index]=false
        return true
    }
function createGraph(n:number,prerequisites: number[][]):number[][]{
    let graph:number[][]=new Array<number[]>(n)
    for(let i=0;i<n;i++) graph[i]=[]
    for(let i=0;i<prerequisites.length;i++){
        let indexToBeInserted=prerequisites[i][0]
        let itemToBeInserted=prerequisites[i][1]
        graph[indexToBeInserted].push(itemToBeInserted)
    }
    return graph
}

function canFinish(n: number, prerequisites: number[][]): boolean {
    let graph= createGraph(n,prerequisites)
    let isVisited:boolean[]=new Array<boolean>(n)
    let pathVis:boolean[]=new Array<boolean>(n)
    isVisited.fill(false)
    pathVis.fill(false)
    for(let i=0;i<n;i++){
        if(!isVisited[i]&&!dfs(graph,isVisited,pathVis,i)) return false
    }
    return true
};
