class Solution {
    public int[] twoSum(int[] arr, Integer target) {
        int[] ans=new int[2];
        ans[0]=-1;
        ans[1]=-1;
       int n=arr.length;
        int sum=0;
        HashMap<Integer,Integer>map=new HashMap<>();
        for(int k=0;k<n;k++)
        {
        map.put(arr[k],k);    
        }
      for(int i=0;i<arr.length;i++)
      {
          int dif=target-arr[i];
          if(map.containsKey(dif))
          {
              if(map.get(target-arr[i])!=i)
              {
             ans[0]=i;
              ans[1]=map.get(target-arr[i]);
              break; 
              }
             
          }
      }
        return ans;
    }
}