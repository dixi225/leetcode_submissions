class Solution {
    String[] convertToArray(String s){
        String[]returningString=new String[3];
        int i=0;
        int n=s.length();
        int k=0;
        while(i<n){
            String temp="";
            while(i<n&&s.charAt(i)!=':'){
                temp+=s.charAt(i);
                i++;
            }
            returningString[k++]=temp;
            i++;
        }
        return returningString;
    }
    public int[] exclusiveTime(int m, List<String> logs) {
        Stack<String[]>s=new Stack<>();
        int n=logs.size();
        int[] exclusiveTime=new int[m];
        Arrays.fill(exclusiveTime,0);
        for(int i=0;i<n;i++){
            String[]arr=convertToArray(logs.get(i));
            if(arr[1].equals("start")){
                s.push(arr);
            } 
            else{
                int index= Integer.parseInt(arr[0]);
                exclusiveTime[index]+=Integer.parseInt(arr[2])-Integer.parseInt(s.peek()[2])+1;
                int residue=Integer.parseInt(arr[2])-Integer.parseInt(s.pop()[2])+1;
                if(!s.isEmpty()) exclusiveTime[Integer.parseInt(s.peek()[0])]-=residue;
            }
        }
        return exclusiveTime;
    }
}