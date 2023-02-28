/**
 * Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's 
 * and all the 1's in these substrings are grouped consecutively.
 *  Substrings that occur multiple times are counted the number of times they occur.
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let currentCount = 1, previousCount = 0, total = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i-1]) {
      currentCount++;
    } else {    
    total += Math.min(previousCount, currentCount);
    previousCount = currentCount;
    currentCount = 1;
    }
  }

  return total += Math.min(previousCount, currentCount);
};