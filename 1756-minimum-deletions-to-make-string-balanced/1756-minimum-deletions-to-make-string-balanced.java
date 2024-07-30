class Solution {
    public int minimumDeletions(String s) {
        Stack<Character>stack=new Stack<>();
        int ans=0;
        int n=s.length();
        for(int i=0;i<n;i++){
            if(stack.isEmpty()) stack.push(s.charAt(i));
            else{
                if(s.charAt(i)=='b') stack.push(s.charAt(i));
                else{
                    if(stack.peek()=='b') {
                        ans++;
                        stack.pop();
                        }
                     else   stack.push(s.charAt(i));
                }
            }
        }
        return ans;
    }
}