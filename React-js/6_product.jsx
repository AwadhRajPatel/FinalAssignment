import React from 'react';

const Product = () => {
  return (
    <div className="product">
      <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9yM-4jxAipH-NiXgY7rZrMQCn4MJWBNOLIyC6iodaRY10i_WMBceH9tAhmBC8N-L1XNwxt5vttRIY-LXtOvaG36699OXs_OyC5LSjty3mqb7MXmy-E7yJg7xkoCa7KHuaERPTsA&usqp=CAc" alt="Product Image" />
      <h2>Headphones | High Base Clear Sound</h2>
      <p>The flagship-level battery life for the all-new OnePlus Nord Buds 2r delivers up to 38 hrs of non-stop music on a single charge.</p>
      <p className="price">$12</p>
      <button className="buy-now">Buy Now</button>
    </div>
  );
};

export default Product;