class Solution {
    public int[] asteroidCollision(int[] arr) {
        Stack<Integer>s=new Stack<>();
        int n=arr.length;
        for(int i=0;i<n;i++){
            if(s.isEmpty()) s.push(arr[i]);
            else{
                if(s.peek()<0&&arr[i]<0) s.push(arr[i]);
                else if(s.peek()>=0&&arr[i]>=0) s.push(arr[i]);
                else if(s.peek()<0&&arr[i]>=0) s.push(arr[i]);
                else{
                    int top=s.peek();
                    int cur=-1*arr[i];
                    if(top==cur) s.pop();
                    else if(top<cur){
                        while(!s.isEmpty()&&s.peek()>0&&top<cur){
                            s.pop();
                            if(!s.isEmpty()) top=s.peek();
                        }

                        if(!s.isEmpty()&&s.peek()==cur) s.pop();
                        else if(!s.isEmpty()&&s.peek()>0) continue;
                        else s.push(arr[i]);
                    }
                }
            }  
        }
        int[]ans=new int[s.size()];
        int k=0;
        while(!s.isEmpty()) ans[k++]=s.pop();
        int i=0;
        int j=ans.length-1;
        while(i<j){
            int temp=ans[i];
            ans[i]=ans[j];
            ans[j]=temp;
            i++;
            j--;
        }
        return ans;
    }
}