
// value matching (traditional) version of indexOf
// function indexOf(value, elements) {
//   for (let index = 0; index < elements.length; index++) {
//     if (elements[index] === value) {
//       return index;
//     }
//   }
//   return -1;
// }

function indexOf(isMatch, elements) {
  if (Array.isArray(elements)) {
    for (let index = 0, length = elements.length; index < length; index++) {
      if (isMatch(elements[index], index, elements)) {
        return index;
      }
    }
  }
  return -1;
}

module.exports = indexOf;