class Solution {
    public int calculate(String s) {
        if (s.length() == 0) return 0;
        Stack<Integer> stack = new Stack<>();
        char op = '+';
        s+="-";
        int n=0;
        for(int i=0;i<s.length();i++){
            char c=s.charAt(i);
            if(c>='0'&&c<='9'){ n = n*10 + c - '0'; continue;}
            if(c ==' ') continue;
            if(op=='+') stack.push(n);
            else if(op=='-') stack.push(-1*n);
            else if(op=='*') stack.push(n*stack.pop());
            else if(op=='/') stack.push(stack.pop()/n);
            op=c;
            n=0;
            System.out.println(op);
        }
        int total = 0;
        while (!stack.isEmpty()) total += stack.pop();
        return total;
    }
}