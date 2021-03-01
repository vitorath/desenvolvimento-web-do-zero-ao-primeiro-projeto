// Apagar item de vetor
db.collection(TURMA)
  .doc(ALUNO_NOVO)
  .update({
    cidades: firebase.firestore.FieldValue.arrayRemove("Minas Gerais", "Vitória")
  }).then(() => {
    console.log("Documento removido com sucesso! ");
  }).catch(err => {
    console.log(err);
  });

// Apagar um campo
db.collection(TURMA)
  .doc(ALUNO_NOVO)
  .update({
    cidades: firebase.firestore.FieldValue.delete()
  }).then(() => {
    console.log("Documento removido com sucesso! ");
  }).catch(err => {
    console.log(err);
  });

// Apagar documento
db.collection(TURMA)
  .doc(ALUNO_NOVO)
  .delete().then(() => {
    console.log("Documento removido com sucesso! ");
  }).catch(err => {
    console.log(err);
  });

// Caso queira apagar mais de um documento, deve ser apagador um a um