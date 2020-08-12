const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Up and running on port ${port}`);
});
