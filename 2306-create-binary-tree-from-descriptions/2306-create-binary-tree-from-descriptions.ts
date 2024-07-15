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

function createBinaryTree(arr: number[][]): TreeNode | null {
        let n=arr.length
        let map=new Map<Number,TreeNode>
        let map1=new Map<Number,Boolean>
        let head:TreeNode|null=null
        for(let i=0;i<n;i++){
                let node=(map.has(arr[i][0])) ? map.get(arr[i][0]) : new TreeNode(arr[i][0])
                map1.set(arr[i][0],false)
                if(!map.has(arr[i][0])) map.set(arr[i][0],node)
                if(arr[i][2]==1){
                    node.left=(map.has(arr[i][1]))?map.get(arr[i][1]):new TreeNode(arr[i][1])
                    if(!map.has(arr[i][1])) map.set(arr[i][1],node.left)
                }else{
                    node.right=(map.has(arr[i][1]))?map.get(arr[i][1]):new TreeNode(arr[i][1])
                    if(!map.has(arr[i][1])) map.set(arr[i][1],node.right)
                } 
        }
        map.forEach((value: TreeNode | null, key: Number) => {
                if(value.left!=null&&map1.has(value.left.val)) map1.delete(value.left.val) 
                if(value.right!=null&&map1.has(value.right.val)) map1.delete(value.right.val) 
});

        map1.forEach((value: Boolean, key: Number) => {
            head=map.get(key)
});
        return head       
};