/*
20. Valid Parentheses
Easy
17.5K
955
Companies

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

*/

/*
map open to close brackets
loop and push open bracket into a array
when close bracket, pop the last open bracket, and check if they are a pair
true, continue, false, return
check is the open bracket array is empty at the end
*/

// time - o(n)
// space - o(n)

var isValid = function (s) {
  let bracket = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let open = [];

  for (let type of s) {
    if ("{[(".includes(type)) {
      open.push(type);
    } else {
      let removed = open.pop();
      if (bracket[type] !== removed) {
        return false;
      }
    }
  }

  return open.length === 0;
};

let s = "()[]{}";
console.log(isValid(s));
