const aluno = {
  matricula: 1234,
  nome: "Marcos",
  telefone: 123456789,
  cidade: "Barra do piraí"
};

const aluno2 = {
  matricula: 2345,
  nome: "Ana",
  telefone: 987654321,
  cidade: "Barra do piraí"
};

const { matricula, nome: nome1, telefone } = aluno;
console.log(matricula, nome1, telefone);

const { ...copia } = aluno;
console.log(copia);
console.log(aluno);


const { nome, ...resto } = aluno;
console.log(resto);
console.log(nome);


const alunos = [aluno, aluno2];
const [marcus, joao] = alunos; // Referência por posição

console.log(marcus);

const [marcus2, ...outros] = alunos;
console.log(marcus2);
console.log(outros);