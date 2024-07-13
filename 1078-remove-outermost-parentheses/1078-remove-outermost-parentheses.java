class Solution {
    public String removeOuterParentheses(String s) {
        int n=s.length();
        String ans="";
        int count=0;
        for(int i=0;i<n;i++){
            if(count==0) count++;
            else{
                if(count==1&&s.charAt(i)==')') count--;
                else{
                    ans+=s.charAt(i);
                    if(s.charAt(i)=='(') count++;
                    else count--;
                }
            }
        }
        return ans;
    }
}