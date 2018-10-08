// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Runtime complexity = for every increase in n 1 more calculatios needed, so linear run time. 
function fib(n) {
  const result = [0, 1]; // look at previous 12

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

fib(20);
// solved with recursion
// Exponential runtime.. a dramatic increase in number of function calls
// Never a good answer
// To decrease the runtime complexity, if asked, use Memoization
// Store the contents of each function call along with the result. If the function is called again with the same result use the precomputed result rather than a new function call. 
// function memoize(fn) {
//   const cache = {}

//   // this function is essetially fib declared below.. a function and it's arguments are whatever arguments would have been sent to slowFib().. so fib(5) is really slowFib(5)
//   return function(...args) { // using es6 spread to account for any number of possible arguments being passed in as an array
//     if(cache[args]) { // have these arguments ever been passed in before? 
//       return cache[args]; // if it exists return those arguments right now and dont call origonal function
//     }
//     // if we never called this argument with these functions
//     const result = fn.apply(this, args); // using apply because of the array of objects ...args 
//     cache[args] = result; // take the result from the slowFib function and storing it in the cached object at the key args

//     return result;
//   }
// }

// function slowFib(n) {
//   if(n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2); // these are named fib because they are calling the memoized version not the slowFib
// }

// const fib = memoize(slowFib);
// fib(10);
module.exports = fib;
