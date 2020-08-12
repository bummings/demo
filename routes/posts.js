const express = require('express');

const router = express.Router();

// posts removed from get route, as the app.use middleware fills that in

router.get('/', (req, res) => {
  res.send('Here are the posts');
});

module.exports = router;
