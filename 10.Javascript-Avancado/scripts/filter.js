function novoAluno(nome, idade) {
  return { nome, idade };
}

const alunos = [
  novoAluno("Mario", 23),
  novoAluno("Jośe", 45),
  novoAluno("Marcia", 29),
  novoAluno("João", 35)
];

function temMenosDe30(aluno) {
  return aluno.idade < 30;
}

const alunoMenosDe30 = alunos.filter(temMenosDe30);
console.log(alunoMenosDe30);