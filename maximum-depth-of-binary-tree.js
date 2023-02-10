/*104. Maximum Depth of Binary Tree
Easy
9.6K
156
Companies

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

 

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// DFS recursive 
var maxDepth = function(root) {
    if(!root){
        return null
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};



// BFS 
var maxDepth = function(root) {
    if(!root){
        return null
    }

    let level = 0
    let queue = [root] 

    while(queue.length > 0){

        //Get the snapshot length to remove from queue
        let qLenght = queue.length
        for(let i=0; i<qLenght; i++){
            let node = queue.shift()
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        level += 1
    }

    return level
};


//DFS Iterative, preorder, root,left,right

var maxDepth = function(root) {
     let stack = [[root, 1]]
     let res = 0

     while(stack.length > 0){
        let [node, depth] = stack.pop()

        if(node){
            res = Math.max(res, depth)
            stack.push([node.left, depth + 1])
            stack.push([node.right, depth + 1])
        }
     }

     return res
}