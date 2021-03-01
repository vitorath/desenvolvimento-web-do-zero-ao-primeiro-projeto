// Atualizar deve passar o objeto inteiro, não parcial
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

// Atualizando somente o sobrenome
db.collection(TURMA)
  .doc(ALUNO_NOVO)
  .set({
    sobrenome: 'Smith'
  }, { 
    merge: true // Define para mergear com o objeto e não sobreescrever todos
  }).then(() => {
    console.log("Documento inserido com sucesso! ");
  }).catch(err => {
    console.log(err);
  });

// Atualziando sem se preocupar com o merge
db.collection(TURMA)
  .doc(ALUNO_NOVO)
  .update({
    sobrenome: 'Smith',
    "notas.nota1": 10,
    faltas: firebase.firestore.FieldValue.increment(5),
    cidades: firebase.firestore.FieldValue.arrayUnion("Minas Gerais", "Vitória") // arrayRemove para remover
  }).then(() => {
    console.log("Documento inserido com sucesso! ");
  }).catch(err => {
    console.log(err);
  });