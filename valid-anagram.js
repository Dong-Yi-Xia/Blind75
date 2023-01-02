// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// check if both str length is equal
// let counter be length of first string
// loop through first string 
// create a map of first string and increase the character counter 
// check is second string character is in the map, if not or value is 0 return false
// loop through second string decrease counter 
// check counter if it returns 0 at the end
// Time - O(n+m) -> same length o(2n) -> O(n)
// Space - O(n)


var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let counter = s.length

    let letters = {}

    for(let char of s){
        letters[char] = (letters[char] || 0) + 1
    }

    for(let char of t){
        // letters[char] = 0, js 0 is falsy
        if(!letters[char]) return false

        letters[char] = letters[char] - 1
        counter--
    }

    return counter === 0
};


console.log(isAnagram('table', 'abttt'))



////////////////////////////////
// if we want no extra memory O(1), what can we do?
// we can sort, bubble sort, insertion sort, selection sort O(1) but time complexity is n^2
// good sort uses memory,  1.merge sort O(n) with time of O(n log n) 2.quick sort O(log n) with time o(n log n)
// check if string1 === string2