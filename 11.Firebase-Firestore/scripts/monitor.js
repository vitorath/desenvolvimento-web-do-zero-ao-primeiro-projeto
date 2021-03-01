db.collection(TURMA)
  .onSnapshot(snapshot => {
    snapshot.forEach((doc) => {
      let aluno = doc.data();
      console.log('Snapshot ', aluno.nome, aluno.sobrenome);
    })
  });


db.collection(TURMA)
  .doc(ALUNO_NOVO)
  .onSnapshot(doc => { // Funciona adicionando where também
    let aluno = doc.data();
    console.log('Snapshot Anna', aluno);
  });
