// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// =========================================================
// Best way to solve
// =========================================================
function reverse(str) {
  // takes all the elements of the array and boils them down to one value.
  // return str.split('').reduce((reverse, character) => {
  //   return character + reverse;
  // }, ''); // reduce takes 2 values, the function.. and the initial value.
  // refactored version
  return str.split('').reduce((rev, char) => char + rev, '');
}

// =========================================================
// Better way to solve
// =========================================================
//This wont allow you to iterate over every so elements, you need to use a reg for or while loop
// function reverse(str) {
//   let reversed = '';

//   for (let item of str) {
//     reversed = item + reversed;
//   }

//   return reversed;
// }

reverse('Hello');


// =========================================================
// Most simple
// =========================================================
// function reverse(str) {
//   let newStr = str.split('').reverse().join('');

//   return newStr;
// }

module.exports = reverse;
