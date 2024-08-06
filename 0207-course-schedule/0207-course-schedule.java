class Solution {
    ArrayList<ArrayList<Integer>> createGraph(int n, int[][]prerequisites){
    ArrayList<ArrayList<Integer>>graph=new ArrayList<>();
    for(int i=0;i<n;i++) graph.add(new ArrayList<Integer>());
    for(int i=0;i<prerequisites.length;i++){
        int indexToBeInserted=prerequisites[i][0];
        int itemToBeInserted=prerequisites[i][1];
        graph.get(indexToBeInserted).add(itemToBeInserted);
    }
    return graph;
    }
    public boolean canFinish(int n, int[][] prerequisites) {
        ArrayList<ArrayList<Integer>>graph=createGraph(n,prerequisites);
        Queue<Integer>q=new LinkedList();
        Stack<Integer>stack=new Stack<Integer>();
        int[]inner=new int[n];
        Arrays.fill(inner,0);
        for(int i=0;i<n;i++){
            int m=graph.get(i).size();
            for(int j=0;j<m;j++){
                inner[graph.get(i).get(j)]+=1;
            }
        }
        for(int i=0;i<n;i++){
            if(inner[i]==0){
                q.add(i);
            }
        }  
        while(!q.isEmpty()){
            int cur=q.poll();
            stack.push(cur);
            for(int i=0;i<graph.get(cur).size();i++){
                inner[graph.get(cur).get(i)]-=1;
                if(inner[graph.get(cur).get(i)]==0) q.add(graph.get(cur).get(i));
            }
        }
        return stack.size()==n;
    }
}