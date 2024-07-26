class Solution {
    public String removeStars(String s) {
        Stack<Character>stack=new Stack<>();
        int n=s.length();
        for(int i=0;i<n;i++){
            if(s.charAt(i)=='*'){
                if(!stack.isEmpty()) stack.pop();
            }
            else stack.push(s.charAt(i));
        }
        String ans="";
        while(!stack.isEmpty()) ans=stack.pop()+ans;
        return ans;
    }
}