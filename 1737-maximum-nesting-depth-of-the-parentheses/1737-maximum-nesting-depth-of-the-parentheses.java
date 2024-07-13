class Solution {
    public int maxDepth(String s) {
        int count=0;
        int n=s.length();
        int ans=0;
        // Stack<Character>stack=new Stack<>();
        for(int i=0;i<n;i++){
            if(s.charAt(i)=='(') count++;
            else if(s.charAt(i)==')'){
                ans=Math.max(ans,count);
                count--;
            }
        }
        ans=Math.max(ans,count);
        return ans;
    }
}