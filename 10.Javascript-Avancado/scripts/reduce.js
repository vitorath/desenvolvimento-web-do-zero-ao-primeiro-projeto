function novoAluno(nome, idade) {
  return { nome, idade };
}

const alunos = [
  novoAluno("Mario", 23),
  novoAluno("Jośe", 45),
  novoAluno("Marcia", 29),
  novoAluno("João", 35)
];


function idadeDaTurma(total, aluno) {
  return total + aluno.idade;
}

function nomeDaTurma(nomezao, aluno) {
  return nomezao + aluno.nome;
}

console.log(alunos.reduce(idadeDaTurma, 0));
console.log(alunos.reduce(nomeDaTurma, "alguma coisa antes "));