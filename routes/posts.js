const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// 'posts' removed from get route, ala middleware
router.get('/', (req, res) => {
  res.send('Here are the posts');
});

// example of using router middleware for a sub-post page
router.get('/specific', (req, res) => {
  res.send('VERY specific post');
});

module.exports = router;
