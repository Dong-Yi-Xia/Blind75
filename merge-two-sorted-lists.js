/*
21. Merge Two Sorted Lists
Easy
17K
1.5K
Companies

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

 

Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.

*/


// list are ORDERED
// create a start dummy node
// keep track with a tail node
// while both list are not empty
// if 1 is empty apprend the rest to the dummy node

// Time - o(n)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let newList = new ListNode(0);
  let tail = newList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next; //Update the list pointer 
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next; //Update the tail pointer 
  }

//   list1 ? (tail.next = list1) : (tail.next = list2);
  tail.next = list1 || list2 //Add the rest of the value list

  return newList.next;
};
