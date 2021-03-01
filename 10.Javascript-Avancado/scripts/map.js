function novoAluno(nome, idade) {
  return { nome, idade };
}

const alunos = [
  novoAluno("Mario", 23),
  novoAluno("Jośe", 45),
  novoAluno("Marcia", 29),
  novoAluno("João", 35)
];

function nomeIdade(aluno) {
  return aluno.nome + " tem " + aluno.idade + " anos";
}

console.log(alunos.map(nomeIdade));