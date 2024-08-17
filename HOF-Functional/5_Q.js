function calculate(num1, num2, operation) {
    return operation(num1, num2);
  }
  
  function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    return num1 / num2;
  }
  
  let result1 = calculate(5, 3, add);
  console.log(result1); 
  
  let result2 = calculate(10, 5, subtract);
  console.log(result2); 
  
  let result3 = calculate(4, 6, multiply);
  console.log(result3); 
  
  let result4 = calculate(12, 4, divide);
  console.log(result4); 
  
  let result5 = calculate(10, 0, divide);
  console.log(result5); 

    /* Output: 8
   Output: 5
   Output: 24
   Output: 3
   Output: "Cannot divide by zero"
  */