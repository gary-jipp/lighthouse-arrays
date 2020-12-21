// Common Array methods

// Define a simple array
const items = [1, 2, 3];

// Add a new item to the end
items.push("new last Item");
// Note: Arrays are just JavaScript Objects. Each item can be anything!

console.log("After adding new last item");
for (const item of items) {
  console.log("item:", item);
}

// Add a new item to the beginning
items.unshift("new first item");

console.log("\nAfter adding new first item");
for (const item of items) {
  console.log("item:", item);
}

// Remove from the bottom
let item = items.pop();
console.log("\nLast Item: ", item);
console.log("After popping last item");
for (const item of items) {
  console.log("item:", item);
}

// Remove from the top
item = items.shift();
console.log("\nFirst Item: ", item);
console.log("After popping first item");
for (const item of items) {
  console.log("item:", item);
}
