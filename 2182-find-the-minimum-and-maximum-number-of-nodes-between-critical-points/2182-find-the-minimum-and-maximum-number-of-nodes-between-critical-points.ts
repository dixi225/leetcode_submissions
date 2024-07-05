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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let ans:number[]=[-1,-1]
    if(head==null||head.next==null||head.next.next==null){
        return ans
    }
    let prev=head.val
    let ptr=head.next
    let criticalPoints:number[]=[]
    let count=2
    while(ptr.next!=null&&ptr.next!=null){
        if(ptr.val<prev&&ptr.val<ptr.next.val||ptr.val>prev&&ptr.val>ptr.next.val){
            criticalPoints.push(count)
        }
        count++
        prev=ptr.val
        ptr=ptr.next
    }

    console.log(criticalPoints)
    if(criticalPoints.length<2) return ans

    ans[0]=criticalPoints[1]-criticalPoints[0]
    for(let i=0;i<criticalPoints.length-1;i++){
        ans[0]=Math.min(ans[0],criticalPoints[i+1]-criticalPoints[i])
    }
    ans[1]=criticalPoints[criticalPoints.length-1]-criticalPoints[0]
    return ans
};