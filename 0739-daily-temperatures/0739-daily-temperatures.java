class Solution {
    public int[] dailyTemperatures(int[] arr) {
        Stack<Integer>s=new Stack<>();
        int n=arr.length;
        int[] ans=new int[n];
        for(int i=n-1;i>=0;i--){
            if(i==n-1){
                s.push(i);
                ans[i]=0;
            }else{
                if(arr[s.peek()]>arr[i]){
                    s.push(i);
                    ans[i]=1;
                }else{
                    while(!s.isEmpty()&&arr[s.peek()]<=arr[i]){
                         s.pop();
                    }
                    if(s.isEmpty()) ans[i]=0;
                    else ans[i]=s.peek()-i;
                    s.push(i);
                }
            }
        }
        return ans;
    }
}