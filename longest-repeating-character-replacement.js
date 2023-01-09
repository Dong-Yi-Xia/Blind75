/*
424. Longest Repeating Character Replacement
Medium
7.1K
276
Companies

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

 

Constraints:

    1 <= s.length <= 105
    s consists of only uppercase English letters.
    0 <= k <= s.length
*/


// sliding window
// l and r start at 0,
// check if valid, subwindow length - most freqent count letter <= k
// if not, shift the l pointer and decrease the count 

// 26 letters A-Z
// Time - o(26*n) --> o(n)  

var characterReplacement = function(s, k) {
    let count = {}
    let result = 0
    let l = 0

    for(let r=0; r<s.length; r++){
        let char = s[r]
        count[char] = (count[char] || 0) + 1

        let subWinLength = r - l + 1
        let mostFreqCount = Math.max(...Object.values(count))
        
        //if not valid replacement, shift the left pointer
        if(subWinLength - mostFreqCount > k ){
            count[s[l]]--
            l++
        }

        //Compare the max result with the (update) subwindow
        result = Math.max(result, r - l + 1)
    }

    return result
};


let s = "AABABBA"
let k = 1

console.log(characterReplacement(s,k))