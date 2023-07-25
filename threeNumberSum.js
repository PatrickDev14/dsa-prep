// Write a function that takes in a non-empty array of distinct integers and an integer 'targetSum'. The function should find all triplets in the array that sum up to the targetSum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order.

// If no three numbers sum up to the target sum, the function should return an empty array.

// ### Concepts
// Sort the array so it's in ascending order.
// Since you are dealing with 3 numbers, the i index should be limited by the third index from the end, so sortedArr.length - 2.
// If the current sum === targetSum
// - only increasing leftPointer will make the next currentSum to big
// - only decreasing the rightPointer will make the next currentSum to small

// If the current sum < targetSum , increase the leftPointer to increase the sum.
// If the current sum > targetSum, decrease the rightPointer to decrease the sum.

function threeNumberSum(array, targetSum) {
  let answer = [];
  let sortedArr = array.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = sortedArr.length - 1;

    while (rightPointer > leftPointer) {
	  let currentSum = sortedArr[i] + sortedArr[leftPointer] + sortedArr[rightPointer];
      if (currentSum === targetSum) {
        const tripletArr = [sortedArr[i], sortedArr[leftPointer], sortedArr[rightPointer]];
        answer.push(tripletArr);
        leftPointer++;
        rightPointer--;
      } else if (currentSum < targetSum) {
        leftPointer++;
      } else {
        rightPointer--;
      }      
    }    
  }
  
  return answer;
}
// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;