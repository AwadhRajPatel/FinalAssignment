const express = require('express');
const app = express();
const profileRouter = require('./routes/profile'); // Adjust the path if necessary

// Use the profile router for DELETE requests
app.use('/api', profileRouter); // Or any other appropriate path

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});