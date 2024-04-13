const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
  return res.send('Full Cycle Rocks!');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})