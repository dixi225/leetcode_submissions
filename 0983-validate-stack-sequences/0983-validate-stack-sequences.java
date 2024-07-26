class Solution {
    public boolean validateStackSequences(int[] pushed, int[] poped) {
        Stack<Integer>stack=new Stack<>();
        int n=pushed.length;
        int j=0;
        int i=0;
        while(i<n){
           stack.push(pushed[i]);
           if(stack.peek()==poped[j]){
            while(!stack.isEmpty()&&stack.peek()==poped[j]){
            j++;
            stack.pop();
            }
           }
           i++;
        }
        while(!stack.isEmpty()&&j<n&&poped[j]==stack.peek()){
            stack.pop();
            j++;
        }
        if(stack.isEmpty()) return true;
        return false;
    }
}