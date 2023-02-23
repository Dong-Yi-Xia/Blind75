/**
 * 
 * 347. Top K Frequent Elements
Medium
12.7K
471
Companies

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

 

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    It is guaranteed that the answer is unique.

 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

 */

// Using a bucket sort
/**
    [1,1,1,2,2,3,3,4]

    Max size is the length
    i(counts)   0 | 1 |   2    | 3 | 4 | 5 | 6 | 7 | 8
    values         [4]  [2,3]   [1]  

    countMap
    1 -> 3
    2 -> 2
    3 -> 2
    4 -> 1

Time - o(n)
space - o(n)
 */

var topKFrequent = function (nums, k) {
  let count = {};
  let freq = new Array(nums.length + 1).fill([]); //Add 1 to length to account for the 0 count

  for (num of nums) {
    count[num] = (count[num] || 0) + 1;
  }
  for (const [n, c] of Object.entries(count)) {
    //get the count [] and spread it in
    freq[c] = [...freq[c], Number(n) ]
  }

  let result = []
  //Guaranteed result and contain at least 1 number count
  for(let i=freq.length-1; i>0; i--){
    let subFreq = freq[i]

    //When the count has an array of values
    for(let n of subFreq){
        result.push(n)
        if(result.length === k){
            return result
        }
    }
  }
};

let nums = [4,1,-1,2,-1,2,3];
let k = 2;
console.log(topKFrequent(nums, k));
