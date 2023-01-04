// 125. Valid Palindrome
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

// convert s into lowercase and letters and number only
// while first < last
// first and last should be the same
// time - O(n)
// memory - O(n) created extra space

var isPalindrome = function (s) {
  let string = s.replace(/[^a-z\d]/gi, "").toLowerCase();
  //   console.log(string);
  let first = 0;
  let last = string.length - 1;

  while (first < last) {
    if (string[first] !== string[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";
let ss = "A mama";
isPalindrome(s);


/////////////////////////////////
// time - O(n)
// memory - O(1)

var isPalindrome2 = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    //ignore non alphaNum characters and within bound
    while (left < right && !alphaNum(s[left])) {
      left++;
    }
    while (right > left && !alphaNum(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

const alphaNum = (n) => {
  return (
    "A".charCodeAt(0) <= n.charCodeAt(0) && n.charCodeAt(0) <= "Z".charCodeAt(0) ||
    "a".charCodeAt(0) <= n.charCodeAt(0) && n.charCodeAt(0) <= "z".charCodeAt(0) ||
    "0".charCodeAt(0) <= n.charCodeAt(0) && n.charCodeAt(0) <= "9".charCodeAt(0)
  );
};


console.log(isPalindrome2(s))
