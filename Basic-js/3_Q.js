function generateNumbers(num1, num2) {
    const numbers = [];
    for (let i = num1 + 1; i < num2; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  
  const num1 = 10;
  const num2 = 25;
  
  const numbers = generateNumbers(num1, num2);
  console.log(numbers); 
  
  // Output: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]