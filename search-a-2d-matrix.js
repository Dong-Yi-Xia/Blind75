/*
74. Search a 2D Matrix
Medium
11.2K
328
Companies

You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

 

Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104

 */

// Binary search the matrix, the binary search row,  logm + logn

var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  let col = matrix[0].length;

  let top = 0;
  let bottom = row - 1;
  let foundRow = null;
  while (top <= bottom) {
    let middleRow = top + parseInt((bottom - top) / 2);

    //check if middleRow last index is greater than target, shift the top row down
    if (target > matrix[middleRow][col - 1]) {
      top = middleRow + 1;
    }
    //check if middleRow first index is less than target, shift the bottom row up
    else if (target < matrix[middleRow][0]) {
      bottom = middleRow - 1;
    } else {
      //Found the row
      foundRow = middleRow;
      break;
    }
  }

  // When there is only a single row, after checking target not within, top or bottom crosses and foundRow is still null
  if (top !== bottom && foundRow === null) {
    return false;
  }

  let left = 0;
  let right = col - 1;
  while (left <= right) {
    let middle = left + parseInt((right - left) / 2);

    if (target > matrix[foundRow][middle]) {
      left = middle + 1;
    } else if (target < matrix[foundRow][middle]) {
      right = middle - 1;
    } else {
      return true;
    }
  }

  return false;
};
