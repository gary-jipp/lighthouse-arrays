// More  Array methods

// Define a simple array
const items = [1, 2, 3, 4, 5, "waldo", 6, 7];

// Find something in an array

// 1. expanded format
const findCallBack = function (item) {
  return item === "waldo";
};

let found = items.find(findCallBack);
console.log("Named find callback: ", found);


// 2. anonymous function
found = items.find(function (item) {
  return item === "waldo";
});
console.log("Anonymous find callback: ", found);

// 3. ES6 Arrow function
found = items.find(item => { return item === "waldo"; });
console.log("ES6 find callback ( with {} ): ", found);

// Without the {} we don't even need a return
found = items.find(item => item === "waldo");
console.log("ES6 find callback ( without {} ): ", found);

// Arrow functions are great for anonymous functions.  We generally avoid 
// for named functions but some peiple insist on making everything an arrow function
// I guess everyone has their own taste
