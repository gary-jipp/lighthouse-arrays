
// Simple array
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const string = "12345678";

console.log(array);

// slice(-1) gives us the last char of a array in a new array
// console.log(array.slice(-1));

// slice(-1) gives us the last char of a string in a new string
// console.log(string.slice(-1));

// replace the last item in the array
const removed = array.splice(-1, 1, 9);
console.log(removed);  // ==>  [8] :  splice returns the deleted elements in an array

// original array has beem changed
console.log(array);

console.log(array.pop());
console.log(array);