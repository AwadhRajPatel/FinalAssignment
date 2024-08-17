const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
const medianIndex = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0 ? (ages[medianIndex - 1] + ages[medianIndex]) / 2 : ages[medianIndex];

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find the range of the ages
const range = maxAge - minAge;

// Compare the value of (min - average) and (max - average)
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

console.log("Sorted ages:", ages);
console.log("Min age:", minAge);
console.log("Max age:", maxAge);
console.log("Median age:", medianAge);
console.log("Average age:", averageAge);
console.log("Range:", range);
console.log("Difference between min and average:", minAverageDiff);
console.log("Difference between max and average:", maxAverageDiff);