class Solution {
    public boolean find132pattern(int[] nums) {
        Stack<Integer>s=new Stack<>();
        int n=nums.length;
        int second=Integer.MIN_VALUE;
        for(int i=n-1;i>=0;i--){
            if(s.isEmpty()) s.push(nums[i]);
            else{
                while(!s.isEmpty()&&nums[i]>s.peek()){
                    second=Math.max(s.pop(),second);
                } 
                if(!s.isEmpty()&&nums[i]<s.peek()&&nums[i]<second) return true; 
                s.push(nums[i]);        
         }
        }
        return false;
    }
}