const express = require('express');
const app = express();

// Assume you have a data store for user profiles
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
  { id: 2, name: "Jane Doe", email: "jane@example.com", age: 25 }
];

// Endpoint for fetching all user profiles
app.get('/profiles', (req, res) => {
  res.json(users);
});

// Endpoint for fetching a specific user profile by ID
app.get('/profiles/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});