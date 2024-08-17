function calculate(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  // Example usage
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Division by zero is not allowed";
    }
    return a / b;
  }
  
  console.log(calculate(5, 3, add)); // Output: 8
  console.log(calculate(5, 3, subtract)); // Output: 2
  console.log(calculate(5, 3, multiply)); // Output: 15
  console.log(calculate(5, 3, divide)); // Output: 1.6666666666666667