/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int[] nextLargerNodes(ListNode head) {
        HashMap<ListNode, ListNode>map=new HashMap<>();
        Stack<Integer>stack=new Stack<>();
        ListNode ptr=head;
        int cnt=1;
        while(ptr.next!=null){
            map.put(ptr.next,ptr);
            cnt++;
            ptr=ptr.next;
        }
        int[] ans=new int[cnt];
        int i=cnt-1;
        while(ptr!=null){
            if(stack.isEmpty()){
                ans[i]=0;
                stack.push(ptr.val);
            }else{
                if(ptr.val<stack.peek()){
                    ans[i]=stack.peek();
                    stack.push(ptr.val);
                }else{
                    while(!stack.isEmpty()&&stack.peek()<=ptr.val){
                        stack.pop();
                    }
                    if(stack.isEmpty()) ans[i]=0;
                    else ans[i]=stack.peek();
                    stack.push(ptr.val);
                }
            }
            i--;
            ptr=map.get(ptr);
        }
        return ans;
    }
}