// Function to calculate the total cost based on price and quantity
function calculateTotal({ price, quantity }) {
    return price * quantity;
  }
  
  const item = {
    price: 25.99,   // Price of a single item
    quantity: 3     // Quantity of items purchased
  };
  
  const totalCost = calculateTotal(item);
  console.log(`The total cost is $${totalCost.toFixed(2)}`); // Output: The total cost is $77.97
  