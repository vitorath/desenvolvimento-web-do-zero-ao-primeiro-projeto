const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();


const alunos = [
  {
    id: 0, 
    nome: 'José',
  }, 
  {
    id: 1, 
    nome: 'Maria',
  }, 
  {
    id: 2, 
    nome: 'João',
  }, 
  {
    id: 3, 
    nome: 'Marcos',
  }, 
];

router.use(bodyParser.urlencoded());

router.get('/all', (req, res) => {
  res.json(JSON.stringify(alunos));
});

router.get('/', (req, res, next) => {
  const idAluno = req.body.id;
  const aluno = alunos[idAluno];
  if (aluno) {
    res.json(aluno);
  } else {
    next();
  }
});

router.get('/', (req, res) => {
  const idAluno = req.query.id;
  const aluno = alunos[idAluno];
  if (aluno) {
    res.json(aluno);
  } else {
    res.send('Aluno não encontrado');
  }
});

router.get('/:id', (req, res) => {
  const idAluno = req.params.id;
  const aluno = alunos[idAluno];
  res.json(aluno);
});

module.exports = router;