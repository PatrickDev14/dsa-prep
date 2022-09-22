/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
if magazine.indexOf = -1 return false; 
if the letter at ransomNote[i] has a match in magazine.indexOf,
 the match index is >= 0,
 Remove the magazine index, 
 remove a letter from string?
 magazine is reassigned e.g.
 magazine = str.replace(letter, '')
 then move to the next index of ransomNote in loop; 
 
 else success for all of ransomNote return true;
 */
 var canConstruct = function(ransomNote, magazine) {
  for (let c of ransomNote) {
    if (magazine.indexOf(c) === -1) {
      return false;
    } else {
      magazine = magazine.replace(c,'');
    }    
  }
  return true;
};

// solution using hashmap

var canConstruct = function(ransomNote, magazine) {
  let map = {};
  for(let i = 0 ; i < magazine.length ; i++) {
      
      map[magazine[i]] = map[magazine[i]] ? map[magazine[i]] + 1 : 1;
  }
  
  for(let i = 0 ; i < ransomNote.length ; i++) {
      if(!map[ransomNote[i]]) return false;
      map[ransomNote[i]] -= 1;
  }
  
  return true;
};