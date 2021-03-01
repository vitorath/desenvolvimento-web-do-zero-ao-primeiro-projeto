const usuarios = ["Vitor", "Pedro", "Ana"];

function inserirUsuario(nome, callback) {
  setTimeout(() => {
    usuarios.push(nome);
    callback();
  }, 1000);
}

function listarUsuarios() {
  console.log(usuarios);
}

inserirUsuario("José", listarUsuarios);