/*
11. Container With Most Water
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/*
no negative 
left=0 right=length-1. Maximun width
short side and tall side, short is the max height of water else it overflow
short side height * the distance from the short to the tall(width) to get current max area
after finding that current max height move the short side (while left side < right side)
*/

//time - O(n)
//space - O(1)


var maxArea = function(height) {
    let l = 0
    let r = height.length-1
    let max = 0

    while(l < r){
        let diff = r-l
        let min = Math.min(height[l], height[r])
        let area = min * diff
        max = Math.max(area,max)
        height[l] < height[r] ? l++ : r--
    }
    return max
};