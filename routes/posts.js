const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// 'posts' removed from get route, ala middleware
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.post('/', (req, res) => {
  // peep that post
  console.log(req.body);

  const post = new Post({
    name: req.body.name,
    title: req.body.title,
    content: req.body.content,
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200);
    });
});

// example of using router middleware for a sub-post page
router.get('/specific', (req, res) => {
  res.send('VERY specific post');
});

module.exports = router;
