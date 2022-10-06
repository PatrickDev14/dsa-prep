// A palindrome consists of letters with equal partners, plus possibly a unique center (without a partner). 
// The letter i from the left has its partner i from the right. For example in 'abcba', 'aa' and 'bb' are partners, and 'c' is a unique center.
// Imagine we built our palindrome. It consists of as many partnered letters as possible, plus a unique center if possible.

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  let longest = 0;
  let keys = {};

  for (let char of s) {
      keys[char] = (keys[char] || 0) + 1;
      if (keys[char] % 2 == 0) {
          longest += 2;
      }        
  }
  // if s.length is greater than longest, then there is an existing character that can be added to the middle, increasing longest by 1
  return s.length > longest ? longest + 1 : longest;
};

