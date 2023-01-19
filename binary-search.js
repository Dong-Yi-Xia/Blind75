/*
704. Binary Search
Easy
7.8K
169
Companies

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

 

Constraints:

    1 <= nums.length <= 104
    -104 < nums[i], target < 104
    All the integers in nums are unique.
    nums is sorted in ascending order.

*/

/*
find middle index = (high - low ) / 2 round down + low   or    high + low / 2
check middle <= target, <= because if there is only 1 item in array [4]
if middle is greater than target
middle -1 = new high
if middle is less than target
else middle +1 = new low

*/

var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  // <= check for single array case
  while (low <= high) {
    // let middle = parseInt((high + low) / 2); this way, it might overflow when high and low are very large.

    let middle = low + parseInt((high - low) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

console.log(search(nums, target));
