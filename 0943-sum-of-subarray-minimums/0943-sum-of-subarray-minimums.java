class Solution {
    
    int[] NSR(int[]arr){
        int n=arr.length;
        int[]ans=new int[n];
        Stack<Integer>stack=new Stack<>();
        for(int i=n-1;i>=0;i--){
            if(i==n-1){
                stack.push(i);
                ans[i]=1;
            }else{
                if(!stack.isEmpty()&&arr[i]>arr[stack.peek()]){
                    ans[i]=1;
                    stack.push(i);
                }else{
                    while(!stack.isEmpty()&&arr[i]<arr[stack.peek()]){
                        stack.pop();
                    }
                    if(stack.isEmpty()) ans[i]=n-i;
                    else ans[i]=Math.abs(i-stack.peek());
                    stack.push(i);
                }
            }
        }
        for(int i=0;i<n;i++) System.out.print(ans[i]+" ");
        System.out.println();
        return ans;
    }
    int[] NSL(int[]arr){
        int n=arr.length;
        int[]ans=new int[n];
        Stack<Integer>stack=new Stack<>();
        for(int i=0;i<n;i++){
            if(i==0){
                stack.push(i);
                ans[i]=1;
            }else{
                if(!stack.isEmpty()&&arr[i]>arr[stack.peek()]){
                    ans[i]=1;
                    stack.push(i);
                }else{
                    while(!stack.isEmpty()&&arr[i]<=arr[stack.peek()]){
                        stack.pop();
                    }
                    if(stack.isEmpty()) ans[i]=i+1;
                    else ans[i]=Math.abs(i-stack.peek());
                    stack.push(i);
                }
            }
        }
        for(int i=0;i<n;i++) System.out.print(ans[i]+" ");
        System.out.println();
        return ans;
    } 

    public int sumSubarrayMins(int[] arr) {
        int n=arr.length;
        int[] SR=new int[n];
        int[] SL=new int[n];
        SR=NSR(arr);
        SL=NSL(arr);
        int ans=0;
        int mod = (int) (1e9 + 7);
        for(int i=0;i<n;i++){
            long contribution = ((long)SL[i] * SR[i] % mod) * arr[i] % mod;
            ans = (ans + (int)contribution) % mod;
        }
        return ans;
    }
}