// Ler todos os dados de uma coleção
db.collection("turmaA")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let aluno = doc.data();
      console.log(doc.id);
      console.log(aluno.nome);
    })
  });

// Ler registro específico
db.collection("turmaA")
  .doc("mscdlqQdeq9yCqSKlzDG")
  .get()
  .then((doc) => {
    console.log(doc.data());
  });

// Busca dado específico
db.collection("turmaA")
  .where("nome", ">", "V") // != não funciona
  .where("nome", "<", "Zuleide") // funciona somente em campos similares
  .get()
  .then(snapshot => {
      snapshot.forEach((doc) => {
      let aluno = doc.data();
      console.log(aluno.nome, aluno.sobrenome);
    })
  })