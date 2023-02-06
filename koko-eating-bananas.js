/*
875. Koko Eating Bananas
Medium
5.9K
284
Companies

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23

 

Constraints:

    1 <= piles.length <= 104
    piles.length <= h <= 109
    1 <= piles[i] <= 109

*/

// Brutal force o( max(n) * n)
// Better binary search o( log (max(n)) * n )     BS[1.....11]  *  [3,6,7,11]
// Determine k rate of banana
// 1 pile per hour, if k=1 [3,6,7,11], first pile takes 3/1 = 3hr, second 6/1=6hr ....
// if k=11 3/11=1hr + 6/11=1hr + 7/11=1hr + 11/11=1hr --> 4hr total <= h
// h = max hour available
// k can be min of 1 or max number in pile (11) -->  [1.....11]
// find middle rate between min and max. find the sum if <= h
// it sum is true, check if there is a lower k rate available

var minEatingSpeed = function (piles, h) {
  // l , r  min rate number
  let l = 1;
  let r = Math.max(...piles);
  let res = r; //setting rate to max number in pile gurantee it will be <= h

  while (l <= r) {
    let k = l + parseInt((r - l) / 2); // the k rate
    // console.log("l", l, "r", r, "m", m);
    let hours = 0;

    for (let bananas of piles) {
      let rate = Math.ceil(bananas / k);
      hours += rate;
    }

    if (hours > h) {
      //rate is too slow,
      l = k + 1;
    } else {
      res = Math.min(res, k); //Update the min rate
      r = k - 1; // Check to see if there is a lower rate
    }
  }

  return res;
};

let piles = [3, 6, 7, 11];
let h = 8;

console.log(minEatingSpeed(piles, h));
