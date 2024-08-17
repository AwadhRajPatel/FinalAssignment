// 1. Explain how to create and drop a collection in MongoDB.
// To create a collection, use the `db.createCollection()` method. 
// For example, to create a collection named "products" in the "shopDB" database, you would use the following command:

useshopDB;
db.createCollection("products");
// To drop a collection, use the `db.collection.drop()` method. 
// For example, to drop the "products" collection in the "shopDB" database, you would use the following command:

useshopDB;
db.products.drop();

// 2. Write a script to create a collection named products in the shopDB database.
useshopDB;
db.createCollection("products");

// 3. Write a script to drop the products collection from the shopDB database.
useshopDB;
db.products.drop();