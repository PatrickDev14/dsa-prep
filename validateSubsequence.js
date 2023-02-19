// Given 2 non-empty arrays of integers, write a function that determines whether the 2nd array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear
// in the array. For instance, the nubers [1, 3, 4] from a subsequence of the array [1, 2, 3, 4] and so do the numbers [2, 4].
// Note that a single number in an array and array itself are both valid subsequences of the array.

// solution: count the indexes in the subsequence that match in the array; when the last index is matched, increment once more; then check the
// index === sequence.length

export function isValidSubsequence(array, sequence) {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[index]) {
      index++;
    }
  }
  return index === sequence.length;
}

// TS
// export function isValidSubsequence(array: number[], sequence: number[]) {
//   let index: number = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === sequence[index]) {
//       index++;
//     }
//   }
//   return index === sequence.length;
// }