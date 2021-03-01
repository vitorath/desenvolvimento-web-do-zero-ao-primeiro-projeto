const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();

const videos = [
  'm9jd4Oakov4',
  '6YhCA83Y59k'
];


app.get('/api/videos', (req, res) => {
  res.send(videos);
})

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  })
}



app.listen(3000, () => {
  console.log('Running');
})