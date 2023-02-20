/* 
The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.
Example 1:
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

 * @param {string} s
 * @return {number}
 */

var maxPower = function(s) {
  let currentPower = 1;
  let maxPower = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      currentPower += 1;
      maxPower = Math.max(maxPower, currentPower)     
    } else {
      currentPower = 1;
    }
  }
  return maxPower;
};

/* TS
function maxPower(s: string): number {
  let currentPower: number = 1;
  let maxPower: number = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      currentPower += 1;
      maxPower = Math.max(maxPower, currentPower)     
    } else {
      currentPower = 1;
    }
  }
  return maxPower;
};
 */