const express = require('express');
const fs = require('fs');

const app = express();

let user = {
  id: 0,
  name: 'Vitor',
  phone: '(11) 22222-2222'
};

app.get('/', (req, res) => {
  fs.readFile('./templates/user.html', 'UTF8', (err, data) => {
    console
    if (!err) {
      res.send(render(data, user));
    }
  })
});

app.listen(3000, () => {
  console.log('Server running on 3000');
});

function render(data, obj) {
  for (let key in obj) {
    data = data.replace(`{{{${key}}}}`, obj[key]);
  }
  return data;
}
