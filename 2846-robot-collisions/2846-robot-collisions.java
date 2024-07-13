class Solution {
    public List<Integer> survivedRobotsHealths(int[] positions, int[] healths, String directions) {
        HashMap<Integer,Integer>map=new HashMap<>();
        int n=positions.length;
        for(int i=0;i<n;i++) map.put(positions[i],i);
        Arrays.sort(positions);
        Stack<Integer>s=new Stack<>();
        for(int i=0;i<n;i++){
            int j=map.get(positions[i]);
            if(s.isEmpty()) s.push(j);
            else{
                int k=s.peek();
                if(directions.charAt(j)=='L'&&directions.charAt(k)=='R'){
                        if(healths[k]>healths[j]){
                            healths[k]=healths[k]-1;
                            if(healths[k]==0) s.pop();
                        }else if(healths[k]<healths[j]){
                            while(healths[j]>healths[k]&&directions.charAt(j)=='L'&&directions.charAt(k)=='R'){
                                healths[j]-=1;
                                s.pop();
                                if(s.isEmpty()){
                                    break;
                                }
                                k=s.peek();
                            } 
                        if(s.isEmpty()||directions.charAt(k)=='L') s.push(j);
                        else if(healths[j]==healths[k]) s.pop();
                        else {
                            healths[k]-=1;
                            if(healths[k]==0) s.pop();
                            }
                        }
                        else if(healths[k]==healths[j]) s.pop();
                }else s.push(j);
            }
        }
        
        List<Integer>ans=new ArrayList<>();
        while(!s.isEmpty()){
            ans.add(s.pop());
        }
        Collections.sort(ans);
        for(int i=0;i<ans.size();i++){
            ans.set(i,healths[ans.get(i)]);
        }
        return ans;
    }
}