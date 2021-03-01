const express = require('express');
const mongoose = require('mongoose')
const assert = require('assert');
const path = require('path');

const linkRoute = require('./routes/linkRoute');

const PORT = 3000;
const MONGO_CONNECTION = 'mongodb://localhost:27017/links';

mongoose.connect(MONGO_CONNECTION, {
  auth: { authSource: 'admin' },
  user: 'root',
  pass: 'password',
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", () => assert.strictEqual(null, err));
db.once("open", () => {
  console.log("Banco connectado");
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});