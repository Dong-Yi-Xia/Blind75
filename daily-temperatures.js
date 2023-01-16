/*
739. Daily Temperatures
Medium
9.9K
230
Companies

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

 

Constraints:

    1 <= temperatures.length <= 105
    30 <= temperatures[i] <= 100

 */

// Brutal force o(n^2), nested loop

// using stack
// time o(n)
// space o(n)

var dailyTemperatures = function (temperatures) {
  //Fill result with default of 0 days
  let result = new Array(temperatures.length).fill(0);
  let stack = []; // pair[temp, index]

  for (let i = 0; i < temperatures.length; i++) {
    let temp = temperatures[i];

    // compare stack last temp, with current temp. If greater pop the stack off
    while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
      //stack temp and stack index
      let [stackT, stackInd] = stack.pop();

      //Update the result at that stackIndex position 
      //take the different in the index - stackIndex to calculate the days need to be at a greater temp
      result[stackInd] = i - stackInd;
    }

    stack.push([temp, i]);
  }

  return result;
};

let t = (temperatures = [73, 74, 75, 71, 69, 72, 76, 73]);
console.log(dailyTemperatures(t));
