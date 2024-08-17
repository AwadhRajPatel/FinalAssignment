const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' at the beginning if it doesn't exist
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end if it doesn't exist
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// Remove 'Honey' if allergic
if (allergicToHoney) {
  shoppingCart = shoppingCart.filter(item => item !== 'Honey');
}

// Modify 'Tea' to 'Green Tea'
shoppingCart = shoppingCart.map(item => {
  if (item === 'Tea') {
    return 'Green Tea';
  }
  return item;
});

console.log(shoppingCart);