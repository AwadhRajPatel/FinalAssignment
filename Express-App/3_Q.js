const express = require('express');
const app = express();
app.use(express.json()); // Enable parsing JSON request bodies

// In-memory data storage (replace this with a database in a real application)
const users = {}; 

// Endpoint for updating a user profile
app.put('/profiles/:id', (req, res) => {
  const userId = req.params.id; 
  const updatedProfileData = req.body; 

  // Basic validation (ensure the data is there and make sure it's a valid object)
  if (!updatedProfileData) {
    return res.status(400).json({ error: 'Missing profile data' });
  }

  // Update the user in the in-memory storage
  users[userId] = { ...users[userId], ...updatedProfileData };

  // Respond with the updated profile data
  res.json(users[userId]);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});