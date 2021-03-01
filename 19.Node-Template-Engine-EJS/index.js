const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const users = [
  {
    id: 0,
    name: 'Vitor',
    phone: '(16) 11111-1111'
  },
  {
    id: 1,
    name: 'Ana',
    phone: '(16) 11111-1111'
  },
  {
    id: 2,
    name: 'Pedro',
    phone: '(16) 11111-1111'
  }
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('user', { users });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('Server running on 3000');
});