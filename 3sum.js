/*
15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/*
sum = 0
no duplicated result
sort the nums
1st loop is first position
1st position can't be the same as left neigbor, check condition, skip if same 
2nd loop is the left and right pointer, sum > 0 move right, sum < 0 move left
sum === 0 add to [], shift L pointer and (while loop) check if it wasn't the same value as previous left
[-4,  -2,-2,0,2,2]
       L        R
*/

// time - O(nlogn) + O(n^2) --> O(n^2)
// space - O(n) - because sorting uses memory


var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    let result  = []
    
    for(let i=0; i<nums.length; i++){
        let first = nums[i]
        let left = i+1
        let right = nums.length-1

        // [-4,-1,-1,0,1,2,]
        //Prevent duplicates, skip next first position
        if(i > 0 && first === nums[i-1]){
            continue
        }

        while(left < right){
            let sums = first + nums[left] + nums[right]
            if(sums > 0){
                right--
            }else if(sums < 0){
                left++
            }else{
                //found first set
                result.push([first, nums[left], nums[right]])
                //continue looking for more
                left++
                while(nums[left] === nums[left-1] && left < right){
                    left++
                }
            }
        }
    }

    return result
};



nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))