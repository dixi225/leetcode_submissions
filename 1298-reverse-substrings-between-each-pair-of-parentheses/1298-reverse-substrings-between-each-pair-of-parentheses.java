class Solution {
    void reverse(Character[]ans , int i,int j){
        while(i<j){
            Character temp=ans[i];
            ans[i]=ans[j];
            ans[j]=temp;
            i++;
            j--;
        }
    }
    public String reverseParentheses(String s) {
        int n=s.length();
        if(n<2) return s;
        Stack<Integer>stack=new Stack<>();
        Character[]ans=new Character[n];
        for(int i=0;i<n;i++) ans[i]=s.charAt(i);
        for(int i=0;i<n;i++){
            if(s.charAt(i)=='(') stack.push(i);
            else if(s.charAt(i)==')'){
                int start=stack.pop();
                reverse(ans,start,i);
            }
        }
        String fAns="";
        for(int i=0;i<n;i++){
            if(ans[i]=='('||ans[i]==')') continue;
            fAns+=ans[i];
        } 
        return fAns;
    }
}