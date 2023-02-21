/* 
Given an arry of positive intergers representing the values of coins in your possession, write a function that returns the minimum amount
of change (the minimum sum of money) that you cannot create.
The given coins can have any positive integer value and aren't necessarily unique.
{
  "coins": [6, 4, 5, 1, 1, 8, 9]
}
output: 3 */

/* TS
export function nonConstructibleChange(coins: number[]) {
  coins.sort((a, b) => a - b);
  let currentChangeCreated: number = 0;
  for (let i = 0; i < coins.length; i++) {    
    if (coins[i] > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += coins[i];
  }
  return currentChangeCreated + 1;
}
*/