function binarySearch(array, target) {
  let lo = 0;
  let high = array.length - 1;
  while (lo <= high) {
    let middle = Math.floor((lo + high) / 2 );
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      lo = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  
  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;