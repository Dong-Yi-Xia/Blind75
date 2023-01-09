/*
3. Longest Substring Without Repeating Characters
Medium
31.3K
1.4K
Companies

Given a string s, find the length of the longest
substring
without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
*/

/*
two pointer l and r
create a set tracker
if right pointer position, while number in set remove from set, update the left pointer
compare max length
*/


// Time - o(n)
// Space - o(n) because of set


var lengthOfLongestSubstring = function(s) {
    let left = 0
    let result = 0
    let characters = new Set()

    for(let right=0; right<s.length; right++){
        let char = s[right]

        //shrink the window 
        while(characters.has(char)){
            characters.delete(s[left])
            left++
        }

        characters.add(char)
        let curMax = right - left + 1
        result = Math.max(result, curMax)
    }
    
    return result
};

let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))