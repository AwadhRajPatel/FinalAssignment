async function createData() {
    // Add a User
    const user1 = new User({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
    await user1.save();
  
    // Add a Product
    const product1 = new Product({
      name: 'Laptop',
      price: 1200.00,
      description: 'High-performance laptop',
    });
    await product1.save();
  
    // Add an Order
    const order1 = new Order({
      user_id: user1._id,
      products: [product1._id],
      status: 'Pending',
    });
    await order1.save();
  
    console.log('Data created successfully.');
  }
  
  // Accessing Data
  async function getData() {
    const user = await User.findById(user1._id);
    const product = await Product.findById(product1._id);
    const order = await Order.findById(order1._id)
      .populate('user_id')
      .populate('products');
  
    console.log(`User Name: ${user.name}`);
    console.log(`Product Name: ${product.name}`);
    console.log(`Order Status: ${order.status}`);
  }
  
  // Execute Functions
  createData().then(() => getData());
  