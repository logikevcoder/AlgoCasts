// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
  const chunked = [];
  let index = 0;

  // While index is less than array.length
  while(index < array.length) {
    chunked.push(array.slice(index, index + size)); // produces array from some of the elements.
    index += size;
  }
  
  return chunked;

}

chunk([2, 3, 4, 5, 6,], 2);

// function chunk(array, size) {
//   // Create empty array to hold chunks called 'chunked'
//   const chunked = [];
//   // For each element in the unchunked array 
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]); // Put a new chunk inside and also add element being iterated over in at the same time.
//     } else {
//       last.push(element);
//     }
//   }
//   return chunk();
// }

module.exports = chunk;
