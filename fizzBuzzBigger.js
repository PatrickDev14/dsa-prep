/**
 * @param {number} n
 * @return {string[]}
 
ALLOW FOR MORE CONDITIONS than 3 and 5.
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == "Bazz" if i is divisible by 7.
answer[i] == i (as a string) if none of the above conditions are true.
Example 2:

Input: n = 7
Output: ["1","2","Fizz","4","Buzz", "6", "Bazz"]

 */
 var fizzBuzz = function(n) {
  const fizzHash = {3: "Fizz", 5: "Buzz"};
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let output = "";
    for (let num in fizzHash) {
      if (i % num === 0) {
          output += fizzHash[num];
      }
    }
    if (output === "") {
      output = i.toString();
    }
    arr.push(output);
  }                
  return arr;
}

