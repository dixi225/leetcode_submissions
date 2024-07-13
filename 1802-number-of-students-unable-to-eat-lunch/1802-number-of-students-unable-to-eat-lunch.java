class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        int count_one=0;
        int count_zero=0;
        int n=students.length;
        for(int i=0;i<n;i++){
            if(students[i]==0) count_zero++;
            else count_one++;
        }
        
        int total=count_one+count_zero;

        n=sandwiches.length;
        for(int i=0;i<n;i++){
            if(sandwiches[i]==1){
                if(count_one==0) break; 
                count_one--;
            } 
            else{
                if(count_zero==0) break; 
                count_zero--;
            } 
        }
        return count_zero + count_one;
    }
}