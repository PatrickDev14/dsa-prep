/**
assign a new variable equal to sentence.toLowerCase().match(reg ex)
return a new Set(new variable).size === 26 (letters of alphabet)
this solution has runtime 58ms and beats 98.6%
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  const letters = sentence.toLowerCase().match(/[a-z]/g);
  return new Set(letters).size === 26;
};