const express = require('express');

const router = express.Router();

// posts removed from get route, as the app.use middleware fills that in

router.get('/', (req, res) => {
  res.send('Here are the posts');
});

// example of using router middleware for a sub-post page
router.get('/specific', (req, res) => {
  res.send('VERY specific post');
});

module.exports = router;
