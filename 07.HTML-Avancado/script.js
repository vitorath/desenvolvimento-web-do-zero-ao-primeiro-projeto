let image = document.getElementById("like");

image.addEventListener("click", function () {
  let lastImage = image.getAttribute("src");

  if (lastImage === "./images/thumbs-up.png") {
    image.setAttribute("src", "./images/thumbs-down.jpg");
  } else {
    image.setAttribute("src", "./images/thumbs-up.png");
  }
});

function getListContent(num) {
  let conteudo = "";

  for (let i = 0; i < num; i++) {
    conteudo += "<li>" + i + "</li>"
  }

  return conteudo;
}

let lista = document.getElementById("lista");

const num = parseInt(lista.getAttribute("num"));
lista.innerHTML = getListContent(num);

// Dataset armazena em String
let lista2 = document.getElementById("lista2");
//lista2.dataset.num = "25";
console.log(lista2.dataset);
const num2 = parseInt(lista2.dataset.num);
lista2.innerHTML = getListContent(num2);

