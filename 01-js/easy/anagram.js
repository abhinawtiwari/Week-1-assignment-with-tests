/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  ar1 = str1.split('');
  ar2 = str2.split('');
  ar1 = ar1.sort();
  ar2 = ar2.sort();
  str1 = ar1.join("");
  str2 = ar2.join("");
  if (str1 === str2) return true;
  return false;
}

// console.log('result: ', isAnagram('rasp', 'spar'));
module.exports = isAnagram;
