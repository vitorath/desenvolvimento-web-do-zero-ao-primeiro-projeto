const usuarios = ["Vitor", "Pedro", "Ana"];

function inserirUsuario(nome) {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      usuarios.push(nome);
      const error = false;

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

async function executar() {
  await inserirUsuario("Jośe");
  listarUsuarios();
}

executar();