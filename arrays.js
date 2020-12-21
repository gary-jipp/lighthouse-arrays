// Array Basics & Iterating

// Define a simple array (most common form)
const items = [1, 2, 3];

// We could also do it this way.  
// const items = new Array(1,2,3);

// Add something to the array
items.push(4);
const item = items.pop();


// We could loop an array like this, old-school c-style loop
console.log("Iterating with c-style loop, length:", items.length);

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  console.log("item", item);
}


// But we almost never do that in JavaScript. Instead we almost always use 'for-of'
// Unless we have a really good reason to need the "i"
console.log("\nIterating with for-of, length:", items.length);

for (const item of items) {
  console.log("item", item);
}


// There's also forEach(), which is less common but has its uses
console.log("\nIterating with forEach. length:", items.length);

items.forEach(item => {
  console.log("item", item);
});


// Empty an array by setting its length to zero
items.length = 0;

console.log("\nIterating empty array, length:", items.length);

for (const item of items) {
  console.log("no item", item);
}