class Solution {
    public boolean isValid(String s) {
        Stack<Character>stack=new Stack<>();
        int n=s.length();
        for(int i=0;i<n;i++){
            if(s.charAt(i)=='c'){
                if(stack.isEmpty()) return false;
                if(stack.size()==1) return false;
                char top=stack.pop();
                char a_top=stack.pop();
                if(a_top=='a'&&top=='b') continue;
                stack.push(a_top);
                stack.push(top);
                stack.push('c');
            }else stack.push(s.charAt(i));
        }
        if(stack.size()==0) return true;
        return false;
    }
}