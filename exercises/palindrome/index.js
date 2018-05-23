// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let re = /[^A-Za-z0-9]/g;

//   str = str.toLowerCase().replace(re, '');

//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//     return true;
//   }
// }
// palindrome('a toyotas a toyota');

// function palindrome(str) {

//   let re = /[\W_]/g;

//   let lowRegString = str.toLowerCase().replace(re, '');
//   return lowRegString.split('').every((char, i) => {
//     return char === lowRegString[str.length - i -1];
//   });
// }
// palindrome('racecar');


// function palindrome(str) {
//   let re = /[^A-Za-z0-9_]/g;
//   const newStr = str.toLowerCase().replace(re, '');
//     .split('')
//     .reverse()
//     .join('');

//   return str === newStr;

//   palindrome('mom');
// }

module.exports = palindrome;
