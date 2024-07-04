/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeNodes(head: ListNode | null): ListNode | null {
    if(head==null||head.next==null||head.next.val==0) return head
    let sum=0;
    let ptr=head.next
    let head1=ptr
    while(ptr!=null){
        if(ptr.val!=0){
            sum+=ptr.val
        }else{
            head1.val=sum
            head1.next=ptr.next
            head1=head1.next
            sum=0
        }
        ptr=ptr.next
    }
    return head.next
};