const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is the root.');
});

app.get('/test', (req, res) => {
  res.send('This is a test route.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
