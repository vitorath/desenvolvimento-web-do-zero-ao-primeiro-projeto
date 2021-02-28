/**
 * Arrays
 */
var alunos = new Array("Vitor", "Ana", "Pedro");
alunos = ["Vitor", "Ana", "Pedro"];
console.log(alunos);
console.log(alunos[1]);

for (var i = 0; i < alunos.length; i++) {
  console.log(alunos[i]);
}

for (var i in alunos) { // in pega o index
  console.log(i);
}

for (var aluno of alunos) { // of pega o elemento
  console.log(aluno);
}
