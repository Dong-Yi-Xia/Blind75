/*
49. Group Anagrams
Medium
14.1K
414
Companies

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

 

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

*/

// if going to each string and sorting them
// m is the length on the array, n is the length of the string
// o(m * nlogn)

// map the key to the string, e:1,a:1,t:1 => ["eat", "tea", "ate"]
// new array with 26 empty 0 for a-z lowercase
// covert to array into string as the key
// m is length of array, n is length of string, 26 characters
// Time - o(m*n*26) --> o(m*n)
// Space - o(n*m)

var groupAnagrams = function (strs) {
  let result = {};

  //Get each string
  for(let str of strs){
    // console.log(str)

    // new array for string, will be the key
    let countArray = new Array(26).fill(0)

    for(let char of str){
        // fill up the countArray key for the string
        let index = char.charCodeAt(0) - "a".charCodeAt(0)
        countArray[index] += 1
    }

    // array cant be a key convert to a string version
    let countKey = countArray.join(' ')
    // console.log(countKey)

    if(!result[countKey]){
        result[countKey] = []
    }
    
    //Add it to the key value array
    result[countKey].push(str)
    // result[countKey] = [...result[countKey], str]
    
  }

  // get all the values   
  return Object.values(result)
};


let strs = ["eat","tea","tan","ate","nat","bat"]
let strs2 = ["bdddddddddd","bbbbbbbbbbc"]
console.log(groupAnagrams(strs2))




//////////////////////////////////////////////////////////////////
var groupAnagrams = function(strs) {
    
    let result = {
        //sum: ["words"]
    }
    
    for(let word of strs){
        let sum = []
        for(let i=0; i<word.length; i++){
            sum.push(word.charCodeAt(i))
        }
        sum.sort((a,b) => a-b)
        sum = sum.join("")
     
        if(result[sum]){
            result[sum] = [...result[sum], word]
        }else{
            result[sum] = [word]
        }
    }
    
    return Object.values(result)
    
};