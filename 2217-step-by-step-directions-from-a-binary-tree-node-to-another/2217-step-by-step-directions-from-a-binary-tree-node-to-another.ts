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

var ans=""

function helper (path : Map<number,TreeNode|null>, parent : Map<TreeNode,TreeNode>, start:TreeNode, end:TreeNode,s:string){
    if(start==null) return
    if(start==end){
        ans=(ans=="")?s:((ans.length>s.length)?s:ans)
        console.log(ans)
    }
    path.set(start.val,null)
    if(start.left!=null && path.get(start.left.val)!=null) helper(path,parent,start.left,end,s+"L")
    if(start.right!=null && path.get(start.right.val)!=null) helper(path,parent,start.right,end,s+"R")
    if(parent.has(start)&& path.get(parent.get(start).val)!=null) helper(path,parent,parent.get(start),end,s+"U")
    path.set(start.val,start)
}

function traversal(root:TreeNode | null, path : Map<number,TreeNode|null>, parent : Map<TreeNode,TreeNode>){
    if(root==null) return 
    path.set(root.val,root)
    if(root.left!=null) parent.set(root.left,root)
    if(root.right!=null) parent.set(root.right,root)
    traversal(root.left,path,parent)
    traversal(root.right,path,parent)
}

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    let path=new Map<number,TreeNode | null>()
    let parent=new Map<TreeNode,TreeNode>()
    traversal(root,path,parent)
    let startNode=path.get(startValue)
    let endNode=path.get(destValue)
    helper(path,parent,startNode,endNode,"")
    let ans1=ans
    ans=""
    return ans1
};