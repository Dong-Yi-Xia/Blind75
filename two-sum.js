// 1. Two Sum

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

// can be negative number
// loop through the array
// target - curNumber = complementary Number
// check complementary Number against the map object, to see if it exist
// set map object --> curNumber : index
// if exist [currentIndex, map[key]]
// else return 
// Time - O(n)
// Space - O(n)

var twoSum = function (nums, target) {
  let firstValue = {};

  for (let i = 0; i < nums.length; i++) {
    let curNumber = nums[i];
    let diff = target - curNumber;

    //check the diff key exists
    if (diff in firstValue) {
      return [i, firstValue[diff]];
    }
    firstValue[curNumber] = i;
  }

  return
};

console.log(twoSum([2, 7, 11, 15], 9))
