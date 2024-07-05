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

function removeNodes(head: ListNode | null): ListNode | null {
    if(head==null) return null
    if(head.next==null) return head

    let rightOfHead=removeNodes(head.next)
    if(head.val<rightOfHead.val){
        return rightOfHead
    }
    head.next=rightOfHead
    return head
};