// write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any 2 numbers in the
// input array sum up to the target sum, the function should return them in an array, in any order. If no 2 numbers sum up to the target sum,
// the function should return an empty Array.
// Note that the target sum has to be obtained by summing 2 different integers in the array; you can't add a single integer to itslef in order
// obtain the target sum.
// You can assume that there will be at most one pair of numbers summing up to the target sum.

export function twoNumberSum(array, targetSum) {
  let nums = {};
  for (let num of array) {
    let potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// TS 
// export function twoNumberSum(array: number[], targetSum: number) {
//   let nums : {[n: number] : boolean} = {};
//   for (let num of array) {
//     let potentialMatch = targetSum - num;
//     if (potentialMatch in nums) {
//       return [potentialMatch, num];
//     } else {
//       nums[num] = true;
//     }
//   }
//   return [];
// }