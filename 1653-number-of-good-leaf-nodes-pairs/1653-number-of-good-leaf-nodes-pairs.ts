/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

var pair=0

function helper(root:TreeNode | null, distance:number):number[]{
    if(root==null) return []
    if(root.left==null&&root.right==null) return [1]
    let left=helper(root.left,distance)
    let right=helper(root.right,distance)
    
        for(let i=0;i<left.length;i++){
            for(let j=0;j<right.length;j++){
                if(left[i]+right[j]<=distance) pair++
            }
        } 

    let merge=[...left,...right]
    for(let i=0;i<merge.length;i++) merge[i]=merge[i]+1
    return merge
}
3
function countPairs(root: TreeNode | null, distance: number): number {
    helper(root,distance)
    let ans=pair
    pair=0
    return ans
};