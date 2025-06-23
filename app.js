const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("Home route hit!");
  res.send('Hello from DevOps Project 🚀');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
