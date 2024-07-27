class Solution {
    public int clumsy(int n) {
        if(n<=1) return 1;
        int fact=n;
        char op='*';
        Stack<Integer>stack=new Stack<>();
        stack.push(n);
        n--;
        while(n>1){
            if(op=='*'){
                stack.push(stack.pop()*n);
                op='/';
            }
            else if(op=='/'){
                stack.push((int)(stack.pop()/n));
                op='+';
            }
            else if(op=='+'){
                stack.push(n);
                op='-';
            }
            else{
                stack.push(-1*(n));
                op='*';
            }
            n--;
        }
        int ans=0;
        while(!stack.isEmpty()){
            System.out.println(stack.peek());
            ans+=stack.pop();
        } 
        if(op=='+') ans++;
        else if(op == '-') ans--;
        return ans;
    }
}