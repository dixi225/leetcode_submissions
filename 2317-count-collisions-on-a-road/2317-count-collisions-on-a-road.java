class Solution {
    public int countCollisions(String directions) {
        Stack<Character>stack=new Stack<>();
        int n=directions.length();
        int collisions=0;
        for(int i=0;i<n;i++){
            if(stack.isEmpty()) stack.push(directions.charAt(i));
            else{
                if(stack.peek()=='R'&&directions.charAt(i)=='L'){
                    collisions+=2;
                    stack.pop();
                    while(!stack.isEmpty()&&stack.peek()=='R'){
                    collisions++;
                    stack.pop();
                    }
                    stack.push('S');
                }
                else if(stack.peek()=='R'&&directions.charAt(i)=='S'){
                    while(!stack.isEmpty()&&stack.peek()=='R'&&directions.charAt(i)=='S'){
                    collisions++;
                    stack.pop();
                    }
                     stack.push('S');
                }
                 else if(stack.peek()=='S'&&directions.charAt(i)=='L'){
                    collisions++;
                    stack.push('S');
                 }
                else stack.push(directions.charAt(i));
            }
        }
         return collisions;
    }
}