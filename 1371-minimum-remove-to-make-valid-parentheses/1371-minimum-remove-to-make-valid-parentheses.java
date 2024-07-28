class Solution {
    public String minRemoveToMakeValid(String s) {
        String ans="";
        Stack<Integer>stack=new Stack<>();
        int n=s.length();
        for(int i=0;i<n;i++){
           if(s.charAt(i)=='('){
                stack.push(i);
           }
           else if(s.charAt(i)==')'){
                if(!stack.isEmpty()&&s.charAt(stack.peek())=='(') stack.pop();
                else stack.push(i);
           }
        }
        for(int i=n-1;i>=0;i--){
            if(!stack.isEmpty()&&stack.peek()==i){
                stack.pop();
                continue;
            }
            ans=s.charAt(i)+ans;
        }
        return ans;
    }
}