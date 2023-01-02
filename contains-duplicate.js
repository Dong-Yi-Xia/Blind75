// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Create a set of seen numbers
// Loop through the array and check against the set
// If exist return true, else return false
// If non-sorted
// Time - O(n)
// Space - O(n)

var containsDuplicate = function (nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
};



const nums = [1,2,3,4,1,6,7,8,9]
containsDuplicate(nums)


//////////////////////////////////////
// if sorting them first
// check if adjustion number is the same
// [1,1,2,3,4,4]
// Time - O(nlogn) 
// Space - O(1)

/////////////////////////////////////////
// brutal force 
// compare through the first and second loop
// Time - O(n^2)
// Space - O(1)
