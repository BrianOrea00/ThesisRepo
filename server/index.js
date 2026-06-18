
const express = require('express');

const app = express();

const PORT = 3000;

app.use('/', (_, res) => {
  res.json({
    message: "hello world"
  });
});


app.listen(PORT, () => {
  console.log('hello world');
})
