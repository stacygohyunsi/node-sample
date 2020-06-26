const express = require('express');
const { convertToOrdinalNumber } = require('./module-a');

const app = express();

app.get('/answer', (req, res) => {
  res.json('the answer is :'+ convertToOrdinalNumber(100));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running at port 3000');
});
