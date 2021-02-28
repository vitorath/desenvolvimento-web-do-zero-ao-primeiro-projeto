/**
 * Objetos - Propriedades
 */
var aluno = {
  nome: "Vitor",
  notas: [10, 9.5],
};

aluno.matricula = 12345;
aluno["sobrenome"] = "Thomazini";

var proriedade = "sobrenome"
aluno[proriedade] = "A Thomazini";

 console.log(aluno);
 console.log(aluno.nome);
 console.log(aluno["notas"]);

aluno = new Object({
  nome: "Vitor",
  notas: [10, 9.5],
 });

 console.log(aluno);

 /**
  * Objetos - Métodos
  */
var aluno2 = {
  nome: "Vitor",
  notas: [10, 9.5],
  media: function (n1, n2) {
    return (n1 + n2) / 2;
  }
};

console.log(aluno2);
console.log(aluno2.media(aluno.notas[0], aluno.notas[1]));

function calcMedia(n1, n2) {
  return (n1 + n2) / 2;
}

var aluno3 = {
  nome: "Vitor",
  notas: [10, 9.5],
  media: calcMedia,
};

console.log(aluno2);
console.log(aluno2.media(aluno.notas[0], aluno.notas[1]));

var aluno3 = {
  nome: "Vitor",
  notas: [10, 9.5],
  media: function () {
    return (this.notas[0] + this.notas[1]) / 2;
  }
};

console.log(aluno3);
console.log(aluno3.media());

// Fazendo assim a função não pode ser utilizada como um método convencional 
// fora de um objeto
function caclMedia2() {
  return (this.notas[0] + this.notas[1]) / 2;
}

var aluno4 = {
  nome: "Vitor",
  notas: [10, 9.5],
  media: caclMedia2
};

console.log(aluno4);
console.log(aluno4.media());

/**
 * Objetos - Construtores
 */
function criarAluno(nome, nota1, nota2) {
  return {
    nome: nome, 
    nota1: nota1, 
    nota2: nota2, 
    media: function () {
      return (this.nota1 + this.nota2) / 2;
    }
  };
}

function Aluno(nome, nota1, nota2) {
  this.nome = nome;
  this.nota1 = nota1;
  this.nota2 = nota2;

  this.media = function () {
    return (this.nota1 + this.nota2) / 2;
  }
}


var turma = [
  criarAluno("Vitor", 9, 10),
  criarAluno("João", 9, 7),
]

var a = new Aluno("Vitor", 10, 10);

console.log(a);

turma.forEach(aluno => {
  console.log(aluno.nome + " - " + aluno.media());
})

