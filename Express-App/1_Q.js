const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let profiles = [];

app.post('/profiles', (req, res) => {
  const profile = req.body;
  profiles.push(profile);
  res.status(201).json(profile);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});