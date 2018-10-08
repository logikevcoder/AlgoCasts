// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// =========================================================
// Also a good but standard way to solve
// =========================================================
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

// =========================================================
// Good way to do it, but does double the work to solve
// =========================================================
// not an ideal solution because it checks up to center and then past the center to the previous array items.
// This is good to explain to the interviewer why this is not an ideal solution
// function palindrome(str) {

//   let re = /[\W_]/g;
//   let lowRegString = str.toLowerCase().replace(re, '');

//   // every checks for every item in the array in this instance 'character'
//   return lowRegString.split('').every((character, i) => {
//     return character === lowRegString[str.length - i - 1]; // 1st - 1 = last , 2nd = 2 - 1 = 2nd to last
//   });
// }

// =========================================================
// Most simple solution
// =========================================================
// function palindrome(str) {
//   let re = /[^A-Za-z0-9_]/g;
//   const reversedStr = str.split('').reverse().join('');

//   return reversedStr === str;
// }

palindrome('racecar');

module.exports = palindrome;
