class Solution {
    public int[] finalPrices(int[] prices) {
        Stack<Integer>s=new Stack<>();
        int n=prices.length;
        int[] ans=new int[n];
        for(int i=n-1;i>=0;i--){
            if(i==n-1){
                s.push(prices[i]);
                ans[i]=prices[i];
            }
            else{
                if(s.peek()>=prices[i]){
                    while(!s.isEmpty()&&s.peek()>prices[i]) s.pop();
                    if(s.isEmpty()) ans[i]=prices[i];
                    else ans[i]=prices[i]-s.peek();
                    if(s.isEmpty()||s.peek()!=prices[i]) s.push(prices[i]);
                }
                else{
                    ans[i]=prices[i]-s.peek();
                    s.push(prices[i]);
                }
            }
        }
        return ans;
    }
}