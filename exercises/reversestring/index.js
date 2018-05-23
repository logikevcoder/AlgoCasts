// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   // takes all the elements of the array and boils them down to one value.
//   return str.split('').reduce((reverse, character) => character + reverse, ''); // reduce takes 2 values, the function.. and the initial value.
//   // every time it runs it takes the first value and places it inside the function.
// }

// reverse('asdf');

//This wont allow you to iterate over every so elements, you need to use a reg for or while loop
// function reverse(str) {
//   // Create an empty string called 'reversed'.
//   let reversed = '';

//   for(let item of str) {
//     reversed = item + reversed;
//   }

//   return reversed;
// }

// reverse('Hello');

// function reverse(str) {
//   newStr = str
//     .split('')
//     .reverse('')
//     .join('');

//   return newStr;
// }

module.exports = reverse;
