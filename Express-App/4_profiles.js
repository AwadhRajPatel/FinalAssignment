const express = require('express');
const router = express.Router();
const users = require('../data/users'); // Assuming you have a data structure for users

// DELETE /profiles/:id
router.delete('/profiles/:id', (req, res) => {
  const userId = req.params.id;

  // Find the user in the in-memory data store
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    // Remove the user from the data store
    users.splice(userIndex, 1);

    // Send a success response
    res.json({ message: 'Profile deleted successfully' });
  } else {
    // User not found, send a 404 error
    res.status(404).json({ message: 'Profile not found' });
  }
});

module.exports = router;