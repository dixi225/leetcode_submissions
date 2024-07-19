class Solution {
    public String smallestSubsequence(String s) {
       HashMap<Character,Integer>map=new HashMap<>();
        Stack<Character>stack=new Stack<>();
        boolean[]isVisited=new boolean[26];
        Arrays.fill(isVisited,false);
        int n=s.length();
        for(int i=0;i<n;i++) map.put(s.charAt(i),i);
        for(int i=0;i<n;i++){
            if(stack.isEmpty()){
                stack.push(s.charAt(i));
                isVisited[s.charAt(i)-'a']=true;
            } else{
                if(isVisited[s.charAt(i)-'a']==true) continue;
                if(s.charAt(i)<stack.peek()){
                    while(!stack.isEmpty()&&map.get(stack.peek())>i&&s.charAt(i)<stack.peek()){
                        isVisited[stack.pop()-'a']=false;
                    } 
                    stack.push(s.charAt(i));
                    isVisited[stack.peek()-'a']=true;
                }
                else if(s.charAt(i)>stack.peek()){
                    stack.push(s.charAt(i));
                    isVisited[s.charAt(i)-'a']=true;
                } 
            }
        } 
        String ans="";
        while(!stack.isEmpty()) ans=stack.pop()+ans;
        return ans; 
    }
}