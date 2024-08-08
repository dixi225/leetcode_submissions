class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        if(beginWord.equals(endWord)) return 0;
        int n=wordList.size();
        HashMap<String,Boolean>map=new HashMap<>();
        for(int i=0;i<n;i++) map.put(wordList.get(i),false);
        Queue<String>q=new LinkedList<>();
        q.add(beginWord);
        int ans=0;
        while(!q.isEmpty()){
            ans++;
            int z=q.size();
            for(int k=0;k<z;k++){
            String cur=q.poll();
            if(cur.equals(endWord)) return ans;
            for(int i=0;i<cur.length();i++){
                    for(char j='a';j<='z';j++){
                        String toCheck=cur.substring(0,i)+j+cur.substring(i+1);
                        if(map.containsKey(toCheck)){
                            if(!map.get(toCheck)){
                                System.out.println(toCheck+" "+ans);
                                map.put(toCheck,true);
                                q.add(toCheck);
                            }
                        }
                    }
                }   
            }
        }
        return 0;
    }    
}