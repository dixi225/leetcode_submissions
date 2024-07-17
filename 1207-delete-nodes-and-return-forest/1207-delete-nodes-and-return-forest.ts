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

function helper(root: TreeNode | null,to_delete:Map<number,number>,ans:Array<TreeNode | null>):any{
    if(root==null) return null
    root.left=helper(root.left,to_delete,ans)
    root.right=helper(root.right,to_delete,ans)
    if(to_delete.has(root.val)){
        let left=root.left
        let right=root.right
        if(left!=null) ans.push(left)
        if(right!=null) ans.push(right)
        return null
    }else return root
 }

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    let ans=new Array<TreeNode|null>()
    let map=new Map<number,number>()
    let n=to_delete.length
    for(let i=0;i<n;i++) map.set(to_delete[i],-1)
    helper(root,map,ans)
    if(!map.has(root.val)) ans.push(root)
    return ans;

};