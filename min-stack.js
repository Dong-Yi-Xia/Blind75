/*
155. Min Stack
Medium
10.5K
703
Companies

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

 

Constraints:

    -231 <= val <= 231 - 1
    Methods pop, top and getMin operations will always be called on non-empty stacks.
    At most 3 * 104 calls will be made to push, pop, top, and getMin.

*/

/*
create two stack, one regular stack and the other stack at the most most min


-3   -3
1    -2
0    -2
-2   -2

push, pop, top, o(1)
using a second stack getMin o(1)
*/


var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)

    if(this.minStack.length > 0){
        val = Math.min(val, this.minStack[this.minStack.length-1])
    }
    this.minStack.push(val)
   
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


//////////////////////////////////////////////////////////


var MinStack = function() {
    this.elements = [];
  };
  
  /**
  
   @param {number} x
   @return {void}
   */
  MinStack.prototype.push = function(x) {
    this.elements.push({
      value: x,
      min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
    });
  };
  /**
  
   @return {void}
   */
  MinStack.prototype.pop = function() {
    this.elements.pop();
  };
  /**
  
   @return {number}
   */
  MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1].value;
  };
  /**
  
   @return {number}
   */
  MinStack.prototype.getMin = function() {
    return this.elements[this.elements.length - 1].min;
  };