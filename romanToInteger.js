/**
 * @param {string} s
 * @return {number}
 if value at i is greater than value at i-1, subtract i-1 value from i value
 and add subtotal to total, and decrease i to skip a digit;
 if value at i is <=  value at i-1, then add value at i to total 
 */

 const romanToInt = function(s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
  let total = 0;
  let current, previous;
  
  for (let i = s.length - 1; i >= 0; i--) {
    current = values[s[i]];
    previous = values[s[i-1]];
    
    if (previous < current) {
      total += current - previous;
      i--;
    }
    else {
      total += current;
    }
  }
  return total;
}