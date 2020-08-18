const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// grab all posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// create new post
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

// grab specific post with id
router.get('/:id', (req, res) => {
  Post.findById(req.params.postId);
});

module.exports = router;
