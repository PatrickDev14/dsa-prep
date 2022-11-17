function binarySearch(haystack, needle) {
  let lo = 0;
  let high = haystack.length;
    do {
      let m = Math.floor( lo + (high - lo) / 2);
      if (haystack[m] === needle) {
        return true;
      } else if (haystack[m] > needle) {
        high = m;
      } else {
        lo = m + 1;
      }
    } while (lo < high);

    return false;
}