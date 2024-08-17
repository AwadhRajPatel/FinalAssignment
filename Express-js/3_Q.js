const express = require('express');
const app = express();

// Middleware to check authentication status
const checkAuth = (req, res, next) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = false; // Example: get authentication status from session or token

  if (isAuthenticated) {
    next(); // User is authenticated, proceed to the route handler
  } else {
    res.redirect('/'); // Redirect to the home page if not authenticated
  }
};

// Home page route
app.get('/', (req, res) => {
  res.send('Welcome to the main page!');
});

// Dashboard route protected by middleware
app.get('/dashboard', checkAuth, (req, res) => {
  res.send('Dashboard Page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});