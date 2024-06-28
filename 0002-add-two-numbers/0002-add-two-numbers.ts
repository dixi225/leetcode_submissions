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

function helper(l1: ListNode | null, l2: ListNode | null,carry:number): ListNode | null{
    if(l1==null&&l2==null&&carry==0) return null
    let head:ListNode|null=helper(l1?l1.next:null,l2?l2.next:null,carry)

    let ans=new ListNode()
    if(l1!=null) ans.val+=l1.val
    if(l2!=null) ans.val+=l2.val
    ans.val+=carry
    let temp:number=ans.val/10
    ans.val%=10
    carry=temp   
    if(!head){
        return ans 
        }
    if(head==null) return ans;   
    let ptr=head
    while(ptr.next!=null) ptr=ptr.next 
    ptr.next=ans
    return head
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // return helper(l1,l2,0)
    let carry:number=0
    let tail=new ListNode()
    let ans=tail
    while(l1!=null||l2!=null){
        if(l1!=null){
            carry+=l1.val
            l1=l1.next
        }
        if(l2!=null){
            carry+=l2.val
            l2=l2.next
        }
        tail.next=new ListNode(carry%10)
        tail=tail.next
        carry=Math.floor(carry/10)

    }   
    if(carry==1){
        tail.next=new ListNode(carry)
        tail=tail.next
    }
    return ans.next
};