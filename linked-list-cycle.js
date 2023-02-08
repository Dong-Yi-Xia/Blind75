/**
 * 141. Linked List Cycle
Easy
11.4K
972
Companies

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

 

Constraints:

    The number of the nodes in the list is in the range [0, 104].
    -105 <= Node.val <= 105
    pos is -1 or a valid index in the linked-list.

 */

// Time o(n)
// Space o(n)

var hasCycle = function (head) {
  let seen = new Set();

  while (head) {
    //Check first if it is in the Set()
    if (seen.has(head)) {
      return true;
    }

    //Add the node to seen
    seen.add(head);
    // Move to the next node
    head = head.next;
  }

  return false;
};

// Time o(n)
// Space o(1)

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  //Fast node will catch up to slow node if there is a cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};
