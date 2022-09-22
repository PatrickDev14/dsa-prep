/**
 * @param {number} n
 * @return {string[]}
 
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

 returning an array containing counts, unless an index is divisible by 3 or 5 or both.
 test for remainder e.g. with x % 3 === 0, case for x % 5, case for x % 15 
 */
 var fizzBuzz = function(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};