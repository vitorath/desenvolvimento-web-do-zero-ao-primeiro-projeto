let newUserEmail = "teste@teste.com";
let newUserPassword = "123abc";

const auth = firebase.auth();

function createUser() {
  auth
  .createUserWithEmailAndPassword(newUserEmail, newUserPassword)
  .then(user => {
    console.log(user);
  }).catch(err => {
    console.log(err);
  })
}

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("Usuário logado", user);
  } else {
    console.log("Ninguém logado")
  }
});

function login(user, password) {

  /**
   * firebase.auth.Auth.Persistence.LOCAL:: Default
   * firebase.auth.Auth.Persistence.SESSION :: Só está logado me uma única aba
   * firebase.auth.Auth.Persistence.NONE :: Atualizar a página e já desloga (memória)
   */
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      auth.signInWithEmailAndPassword(user, password)
        .then((loggedUser) => {
          console.log(auth.currentUser, loggedUser);
        }).catch((err) => {
          console.log(err);
        })
    }).catch(err => {
      console.log(err);
    });
}

function logout() {
  auth.signOut()
    .then(() => {
      console.log("Usuário deslogado");
    }).catch(err => {
      console.log(err);
    })
}

// setTimeout(logout, 2000);
setTimeout(() => login(newUserEmail, newUserPassword), 2000);

