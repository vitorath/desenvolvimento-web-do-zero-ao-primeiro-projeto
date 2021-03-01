const usuarios = ["Vitor", "Pedro", "Ana"];

function inserirUsuario(nome) {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      usuarios.push(nome);
      const error = true;

      if (!error) {
        resolve();
      } else {
        reject({ msg: "Erro de qualquer coisa" });
      }
    }, 1000);
  })

  return promise;
  
}

function listarUsuarios() {
  console.log(usuarios);
}

inserirUsuario("José")
  .then(listarUsuarios)
  .catch((error) => {
    console.log(error.msg);
  });