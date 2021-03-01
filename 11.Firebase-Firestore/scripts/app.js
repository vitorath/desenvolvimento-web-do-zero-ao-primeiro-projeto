var firebaseConfig = {
  apiKey: "AIzaSyBzdoJRbsTZdWdhMSVUEyeTZg9YTWOWiCo",
  authDomain: "colegio-a6d33.firebaseapp.com",
  databaseURL: "https://colegio-a6d33-default-rtdb.firebaseio.com",
  projectId: "colegio-a6d33",
  storageBucket: "colegio-a6d33.appspot.com",
  messagingSenderId: "654342645818",
  appId: "1:654342645818:web:c88b06514b3fe19c382d03",
  measurementId: "G-WVTSPEMYER"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

const TURMA = "turmaA";
const ALUNO_NOVO = "AlunoNovo";



