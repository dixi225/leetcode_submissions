class Solution {
    public int minAddToMakeValid(String s) {
        Stack<Character>stack=new Stack<>();
        int n=s.length();
        for(int i=0;i<n;i++){
            if(stack.isEmpty()) stack.push(s.charAt(i));
            else{
                if(s.charAt(i)==')'){
                    if(stack.peek()=='(') stack.pop();
                    else stack.push(s.charAt(i));
                }else stack.push(s.charAt(i));
            }
        }
        return stack.size();
    }
}