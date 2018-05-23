// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
  // More efficient solution
  return (cleanString(stringA) === cleanString(stringB));
}

// helper function
// The sort method only works on arrays and not strings.. so the split() method is used to turn it into an array. then join to revert back to a string.
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}




// function anagrams(stringA, stringB) {
//   // write a helper function to build the character map for us
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   // Look at the number of keys from both the objects and make sure they match // you could also compare the length.
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   // iterate of the aCharMap
//   // if iterating over an object use in. arrays use of
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//     // if both checks are correct then return true;
//   }
//   return true;
  
// }

// // Helper function for every char in a str add it to the charMap{}
// function buildCharMap(str) {
//   const charMap = {};

//   // build the cleanup logic for the regex + toLowerCase right into the for loop
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) { // take the regexed string and return nothing, then make it lowercase
//     // take charmap and assign key of the current char we are looking at and increment value
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

module.exports = anagrams;
