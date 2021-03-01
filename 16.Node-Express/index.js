// https://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routerAluno = require('./routes/aluno');

const PORT = 5000;

const app = express();

function logHttpMethod(req, res, next) {
  console.log(req.method);
  next();
}

function logErroHttpMethod() {
  console.log(req.method);
  next("Erro");
}

app.use('/aluno', routerAluno);

app.use('/meusite', express.static(path.join(__dirname, 'client')));

app.use('/', bodyParser.json());

app.get('/', logHttpMethod)
app.get('/', (req, res) => {
  // res.set("Content-Type", "text/plain");
  // res.type('html');
  res.send("<h1>hello world from GET</h1>");
});

app.post('/', logErroHttpMethod, (req, res) => {
  res.send("hello world from POST");
});

app.put('/', (req, res) => {
  res.send("hello world from PUT");
});

app.delete('/', (req, res) => {
  res.send("hello world from DELETE");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
