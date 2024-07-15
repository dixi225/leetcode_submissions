class Solution {
    public int minLength(String s) {
    Stack<Character>stack=new Stack<>();
    int n=s.length();
    for(int i=0;i<n;i++){
        if(stack.isEmpty()) stack.push(s.charAt(i));
        else{
             if(s.charAt(i)=='B'){
                if(stack.peek()=='A') stack.pop();
                else stack.push('B');
            }else if(s.charAt(i)=='D'){
                if(stack.peek()=='C') stack.pop();
                else stack.push('D');
            }else stack.push(s.charAt(i));
        }
    }
    return stack.size();
    }
}