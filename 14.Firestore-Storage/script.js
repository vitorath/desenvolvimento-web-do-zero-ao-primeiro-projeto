var firebaseConfig = {
  apiKey: "AIzaSyCHjX-DYaRR9YbCDTYzL4XMeto9J8xFK50",
  authDomain: "dev-storage-504a0.firebaseapp.com",
  projectId: "dev-storage-504a0",
  storageBucket: "dev-storage-504a0.appspot.com",
  messagingSenderId: "860367716321",
  appId: "1:860367716321:web:5b8ecfc0dd2acc370b9ca0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Tudo é referência
const storage = firebase.storage();


const ref = storage.ref("/images"); // .ref() -- pega da raiz, ou caminho para uma uma imagem

// Acessar filho do item do pai
ref.parent
  .child("IMG_20200429_074234577.jpg")
  .getDownloadURL()
  .then(url => {
    console.log(url);
  });

ref.root.listAll().then(res => {
  console.log(res);
});

console.log(ref.name, ref.fullPath);

// Obter url de download
const fileRef = ref.child("IMG_20200429_074234577.jpg");
fileRef.getDownloadURL().then(url => {
  console.log(url);
});

// Obter referância da pasta pai
const fileParent = fileRef.parent;

fileParent.listAll().then(res => {
  res.items[0].getDownloadURL().then(url => {
    console.log(url);
  });
});

// Upload
const fileInput = document.getElementById("file-input");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const fileName = file.name + new Date().getTime();
  ref.child(fileName)
    .put(file)
    .then(snapshot => {
      console.log(snapshot);
    });
});

// Upload base 64
const fileBase64 = '';
ref.child("foto.jpg")
  .putString(fileBase64, "base64")
  .then(snapshot => {
    console.log(snapshot);
  });

// Metadata
ref.child("IMG_20200429_074234577.jpg")
  .getMetadata()
  .then((metadata) => {
    console.log(metadata);
  }).catch(err => {
    console.log(err);
  })

// Update Metadata
const newMetadata = {
  contentType: 'image/png'
}

ref.child("foto.jpg")
  .updateMetadata(newMetadata)
  .then((metadata) => {
    console.log(metadata);
  }).catch(err => {
    console.log(err);
  })
