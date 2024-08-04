class triplets{
        int row;
        int col;
        int time;
        triplets(int row, int col, int time)
        {
            this.row=row;
            this.col=col;
            this.time=time;
        }
}
class Solution {
    public int orangesRotting(int[][] grid) {
        Queue<triplets>q=new LinkedList();
        int n=grid.length;
        int m=grid[0].length;
        boolean[][]isVisited=new boolean[n][m];
        for(int i=0;i<n;i++) for(int j=0;j<m;j++) isVisited[i][j]=false;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]==2){
                    isVisited[i][j]=true;
                    q.add(new triplets(i,j,0));
                }
            }
        }
        int ans=0;
        while(!q.isEmpty()){
            triplets cur=q.poll();
            int row=cur.row;
            int col=cur.col;
            ans=cur.time;
            if(row>0){
                if(!isVisited[row-1][col]&&grid[row-1][col]==1){
                    isVisited[row-1][col]=true;
                    q.add(new triplets(row-1,col,cur.time+1));
                }
            }
            if(row<n-1){
                    if(!isVisited[row+1][col]&&grid[row+1][col]==1){
                    isVisited[row+1][col]=true;
                    q.add(new triplets(row+1,col,cur.time+1));
                }
            }
            if(col>0){
                if(!isVisited[row][col-1]&&grid[row][col-1]==1){
                isVisited[row][col-1]=true;
                q.add(new triplets(row,col-1,cur.time+1));
                }
            }
            if(col<m-1){
                if(!isVisited[row][col+1]&&grid[row][col+1]==1){
                isVisited[row][col+1]=true;
                q.add(new triplets(row,col+1,cur.time+1));
                }
            }
        }
        for(int i=0;i<n;i++) for(int j=0;j<m;j++) if(grid[i][j]==1&&isVisited[i][j]==false) return -1;
        return ans;  
   }
}