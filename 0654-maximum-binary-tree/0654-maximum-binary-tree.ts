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

function helper(nums:number[],i:number,j:number):TreeNode|null{
    if(i>j) return null
    let max=-1;
    let ind=-1;
    for(let k=i;k<=j;k++){
        if(max<nums[k]){
            max=nums[k]
            ind=k
        }
    }
    let head=new TreeNode(max)
    head.left=helper(nums,i,ind-1)
    head.right=helper(nums,ind+1,j)
    return head
}

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    return helper(nums,0,nums.length-1)
};