/* write a function that takes in a non-empty array of intergers that are sorted in ascending order and returns a new array
of the same length with the squares of the original integers also sorted in ascending order */

export function sortedSquaredArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] ** 2;    
  }
  array.sort((a, b) => a - b);
  return array;
}


// single line

export function sortedSquaredArray(array) {
  return array.map(num => num ** 2).sort((a, b) => a - b);
}