/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  console.log('before reverse: ', str);
  str = str.toLowerCase();
  str = str.replace(/[^\w]|_/g, "");
  console.log('after lower case and punctuation removal: ', str);
  const old = str;
  const reversedString = str.split('').reverse().join('');
  if (old === reversedString) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
