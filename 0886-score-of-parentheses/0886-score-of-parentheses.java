class Solution {
    public int scoreOfParentheses(String s) {
        if(s.length()==0) return 0;
        Stack<String>stack=new Stack<>();
        int n=s.length();
        for(int i=0;i<n;i++){
            char ch=s.charAt(i);
            if(ch=='(') stack.push(""+ch);
            else if(ch==')'){
                if(stack.peek().equals("(")){
                    stack.pop();
                    stack.push("1");
                }else{
                    int temp=0;
                    while(!stack.isEmpty()&&!stack.peek().equals("(")){
                        temp+=Integer.parseInt(stack.pop());
                    }
                    if(!stack.isEmpty()) stack.pop();
                    int num=temp;
                    stack.push(""+(2*num));
                }
            }
        }
        int ans=0;
        while(!stack.isEmpty()){
            if(stack.peek().equals("(")) stack.pop();
            else ans+= Integer.parseInt(stack.pop());
        }
        return ans;
    }
}