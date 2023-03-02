/* 
Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.
A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other.
For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap." 

sample input
{
  "words": ["dog", "hello", "desserts", "test", "god", "stressed"]
}
*/

/* using a set
if you add words one at a time to the set, then the pair will only be matched when the reverse of the
word is checked */

function semordnilap(words) {
  const pairs = [];
  const wordSet = new Set();
  for (let word of words) {
    let reversedWord = word.split("").reverse().join("");
    if (wordSet.has(reversedWord)) {
      pairs.push([word, reversedWord]);
    } else {
      wordSet.add(word);
    }
  
  }
  return pairs;
}

// Do not edit the line below.
exports.semordnilap = semordnilap;