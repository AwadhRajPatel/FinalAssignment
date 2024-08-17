const myArray = [1, 2, 3];

function addToArray(arr, ...numbers) {
  return [...arr, ...numbers];
}

const newArray = addToArray(myArray, 4, 5, 6);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]