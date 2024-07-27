class CustomStack {
     int max=0;
     Stack<Integer>stack;
     CustomStack(int maxSize) {
        max=maxSize;
        stack=new Stack<>();
    }
    
    public void push(int x) {
        if(stack.size()>=max) return;
        stack.push(x);
    }
    
    public int pop() {
        return (stack.isEmpty())?-1:stack.pop();
    }
    
    public void increment(int k, int val) {
        Stack<Integer>temp=new Stack<>();
        while(!stack.isEmpty()) {
            temp.push(stack.pop());
            }
         while(!temp.isEmpty()&&k>0){
            stack.push(temp.pop()+val);
            k--;
            }
            while(!temp.isEmpty()) stack.push(temp.pop());
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * CustomStack obj = new CustomStack(maxSize);
 * obj.push(x);
 * int param_2 = obj.pop();
 * obj.increment(k,val);
 */