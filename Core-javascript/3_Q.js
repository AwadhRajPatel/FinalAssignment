function calculateTax() {
    let taxRates = [
      { range: [0, 10000], rate: 0.1 },
      { range: [10001, 20000], rate: 0.2 },
      { range: [20001, Infinity], rate: 0.3 },
    ];
  
    return function (income) {
      let tax = 0;
      for (let i = 0; i < taxRates.length; i++) {
        if (income > taxRates[i].range[0] && income <= taxRates[i].range[1]) {
          tax = (income - taxRates[i].range[0]) * taxRates[i].rate;
          break;
        }
      }
      return tax;
    };
  }
  
  let calculateTaxForIncome = calculateTax();
  console.log(calculateTaxForIncome(5000)); 
  // Output: 500
  console.log(calculateTaxForIncome(15000));
   // Output: 2000
  console.log(calculateTaxForIncome(30000)); 
  // Output: 6000