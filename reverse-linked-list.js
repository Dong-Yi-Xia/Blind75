/**
206. Reverse Linked List
Easy
16.6K
283
Companies

Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

 

Constraints:

    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000 
* /

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }


// Need a prev and curr, 2 pointer.
// Time - o(n)
// Space - o(1)

// Recursive T- o(n)  S - o(n)


// p  c   -->     p  c 
//    1, 2, 3, 4, 5  null
var reverseList = function (head) {
    let prev = null
    let curr = head

    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    return prev
};



// Recursive  
// 1,2,3
// get subset 2,3
// get subset 3
// get subset null

var reverseList = function (head) {
    if(!head){
        return null
    }

    let newHead = head
    if(head.next){
        newHead = reverseList(head.next)
        head.next.next = head
    }
    head.next = null

    return newHead
};