const pessoa = {
  nome: "José Silva",
  idade: 32
};

const contato = {
  telefone: 123456789,
  email: "jose@test.com"
};

const associar = { ...pessoa, ...contato };
console.log(associar);


const notas1 = [10, 9, 10];
const notas2 = [9, 10, 9];

const todasNotas = [...notas1, ...notas2];
console.log(todasNotas);

