// Objects e Arrays normalmente quando modificados ou atribuidos diretamente (referência)
// Primitivos passa como valor

const turma = ["Vitor", "Ana", "Pedro"];
const turmaB = turma.slice(); // Cópia do array
const turmaC = [...turma]; // Cópia do array

const aluno = {
  nome: "Vitor",
  idade: 26
};

const alunoA = Object.assign({}, aluno); // Cópia de objeto
const alunoB = { ...aluno }; // Cópia de objeto