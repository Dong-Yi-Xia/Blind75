/*

22. Generate Parentheses
Medium
16.6K
647
Companies

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

 

Constraints:

    1 <= n <= 8

*/

// n open, n closed
// open === close || close > open, can't add )
// open < n to add (
// close < open to add )
// order matter, can't start with )(((

// time - o(n)
// space - o(n)

var generateParenthesis = function(n) {
    let stack = []
    let result = []

    function backtrack (openN, closedN) {
        //Base case when both open and closed reach n
        if(openN === n && closedN === n){
            result.push(stack.join(''))
        }

        //Can keep adding to ( until it reaches n
        if(openN < n){
            stack.push('(')
            backtrack(openN + 1, closedN)
            stack.pop()    
        }

        // (,(,(,),),) been reached, pop() until the next valid condition, (,(,),

        //Can keep adding ) as long closed is less than open
        if(closedN < openN){
            stack.push(')')
            backtrack(openN, closedN + 1)
            stack.pop()    
        }
    }

    backtrack(0,0)

    return result
};

console.log(generateParenthesis(3))