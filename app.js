const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is the root.');
});

app.get('/test', (req, res) => {
  res.send('This is a test route.');
});

// Connect to MLab
mongoose.connect(
  'mongodb://bummings:mongo420@ds049171.mlab.com:49171/bummings_mongo',
  { useUnifiedTopology: true },
  () => console.log('Connected to DB.')
);

// Terminal confirmation 3000
app.listen(port, () => {
  console.log(`🦊 🎾 🍟 Server is running on port ${port}!`);
});
