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
    public int pairSum(ListNode head) {
        Stack<Integer>s=new Stack<>();
        ListNode ptr=head;
        while(ptr!=null){
            s.push(ptr.val);
            ptr=ptr.next;
        }
        ptr=head;
        int max=Integer.MIN_VALUE;
        while(ptr!=null){
            max=Math.max(max,ptr.val+s.pop());
            ptr=ptr.next;
        }
        return max;
    }
}