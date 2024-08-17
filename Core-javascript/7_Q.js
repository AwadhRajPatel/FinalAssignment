// Create a new Map
const myMap = new Map();

// Add key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'Lucknow');

// Check if a specific key exists
console.log(myMap.has('name')); // true
console.log(myMap.has('country')); // false

// Retrieve the value associated with a given key
console.log(myMap.get('age')); // 30

// Iterate through all key-value pairs
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// Output:
// name: John
// age: 30
// city: New York