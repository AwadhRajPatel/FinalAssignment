const mongoose = require('mongoose');

// Define a schema for a blog post
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for the blog post
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Create a new blog post
const newPost = new BlogPost({
  title: 'My First Blog Post',
  author: 'John Doe',
  content: 'This is the content of my first blog post.',
  tags: ['programming', 'javascript', 'mongodb'],
});

// Save the blog post to the database
newPost.save((err, post) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Blog post created:', post);
});


/**
 * 
 * Schemas in MongoDB

In MongoDB, schemas are not enforced as strictly as in relational databases.
 MongoDB allows you to store documents with different structures, meaning a collection can contain
  documents with varying fields and data types.

Defining and Enforcing Schemas

While MongoDB doesn't require strict schemas, it's often a good practice to define them using a schema definition
 library like Mongoose. Mongoose provides a way to define the structure of your documents, including data types, 
 validation rules, and default values. This helps in:

Data Consistency: Ensures that data in a collection follows a consistent structure.
Error Prevention: Prevents invalid data from being inserted into the database.
Code Clarity: Makes your code more readable and easier to maintain by providing a 
clear definition of the data you're working with.
Blog Post Schema Example

The code above defines a schema for a blog post using Mongoose:

title: Required string field for the blog post title.
author: Required string field for the author's name.
content: Required string field for the blog post content.
tags: Array of strings for tags related to the post.
createdAt: Date field that automatically sets the creation timestamp when a new post is created.
Model and Data Creation

The code then creates a model (BlogPost) based on the schema and uses it to create a new blog post document. 
The save() method persists the new document to the MongoDB database.
 */