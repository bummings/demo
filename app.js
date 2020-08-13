const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv/config');
const app = express();
const port = 1337;

// Routes have been mostly moved to the ../routes directory
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Root route, tho
app.get('/', (req, res) => {
  res.send('This is the root!');
});

// Connect to MLab
mongoose.connect(
  process.env.DB_CONNECTION,
  // some nonsense deprecation add-on from mLab
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('Connected to DB.')
);

// Terminal confirmation 3000
app.listen(port, () => {
  console.log(`🦊 🎾 🍟 Server is running on port ${port}!`);
});
