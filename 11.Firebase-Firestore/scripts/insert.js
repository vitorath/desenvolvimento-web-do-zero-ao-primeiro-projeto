// Adicionar com id gerado automático 
db.collection(TURMA)
  .add({
    nome: "Marcos",
    notas: {
      nota1: 9.6,
      nota2: 7.5
    }
  }).then((doc) => {
    console.log("Documento inserido com sucesso! ",doc);
  }).catch(err => {
    console.log(err);
  })

// Adicionar com id customizado
db.collection(TURMA)
  .doc(ALUNO_NOVO)
  .set({
    nome: "Ana",
    cidades: ["Rio de Janeiro", "São Paulo"],
    faltas: 5,
    notas: {
      nota1: 9.6,
      nota2: 7.5
    }
  }).then(() => {
    console.log("Documento inserido com sucesso! ");
  }).catch(err => {
    console.log(err);
  });