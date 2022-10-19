/** Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0, j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++;
    }
    j++
  }
  return i == s.length;   // since we increment i again after the last matching index
};