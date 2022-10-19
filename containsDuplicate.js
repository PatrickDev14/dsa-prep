// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 use a new Set; if the Set.size is smaller than nums.length, then there is a duplicate in nums
 */
 var containsDuplicate = function(nums) {
  return new Set(nums).size < nums.length;
};