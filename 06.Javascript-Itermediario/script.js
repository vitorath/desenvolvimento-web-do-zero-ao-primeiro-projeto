/**
 * Window
 * 
 * O acesso pode ser feito sem utilizar o objeto window
 */
window.console.log('Hello');
console.log('Hello');

/**
 * Document
 * 
 * São as referências do documento HTML
 */
console.log(document);
console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.head);
console.log(document.head.title);
document.body.innerHTML = "<h1>Esse título foi inserido no JS</h1>" + document.body.innerHTML;

let p1 = document.getElementById('paragrafoId');
console.log(p1);

let paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos);

for (let p of paragrafos) {
  console.log(p);
}

let th = document.getElementsByTagName("h1");
console.log(th);

let tp = document.getElementsByTagName("p");
console.log(th);

/**
 * Modificando elementos
 */
p1.innerHTML = "Novo conteúdo";
p1.textContent = "Mais novo ainda"; // Pega todo o centeúdo, incluindo os filhos
p1.textContent = "<h2>tem um h2 dento do p</h2>";
p1.innerText = "<h2>tem um h2 dento do p</h2>"; // Pega somente o conteúdo da tag, desconsiderando os filhos
p1.innerHTML = "<h2>tem um h2 dento do p</h2>";

console.log(p1.className);
p1.className = "";

console.log(p1.getAttribute("meuAttr"));

p1.setAttribute("meuAttr", "Outro nome");
p1.setAttribute("novo", "Novo atributo");
console.log(p1);

console.log(p1.style);
p1.style.backgroundColor = "red";

/**
 * Eventos 
 * 
 * Quando utilizar o this e aplicar/retorna o evento utilizando javascript,
 * já é retornado e evento do elemento, diferente de quando é chamado no HTML e não
 * passar como parâmetro da função (no caso pega o window)
 */
function h1click() {
  console.log("Click on h1");
}

function changeH1(element) {
  let h1 = document.getElementsByTagName('h1')[2];

  h1.innerText = element.value;
}

function changeColorH1() {
  let h1 = document.getElementsByTagName('h1')[2];
  h1.style.color = 'red';
}

function onOver(element) {
  element.style.backgroundColor = 'blue';
}

function onOut(element) {
  element.style.backgroundColor = 'brown';
}

/**
 * Elementos pai e filhos
 */
window.onload = function () {
  console.log("----Elementos Pai e Filho----")
  let d1 = document.getElementById('container');
  let h1 = d1.children[0];
  console.log(h1);
  console.log(h1.parentElement);
  console.log(document.body.children[11].children);
  console.log("------------")

}

/**
 * Math
 */
console.log("----Math----")
console.log(Math.PI);
console.log(Math.pow(2,3));
console.log(Math.random() * 10); // Random entre 0 e 1
console.log(Math.round(Math.random() * 10));
console.log(Math.round(5.5));
console.log(Math.ceil(5.5));
console.log(Math.floor(5.5));
console.log("------------")

/**
 * JSON
 */
console.log("----JSON----")
let a = {
  nome: "Vitor A Thomazini",
  nota: 9.5,
}
let b = JSON.stringify(a);
let a2 = '{"nome": "Vitor A Thomazini", "nota": 9.5}';
let b2 = JSON.parse(a2);
console.log(a);
console.log(b);
console.log(a2);
console.log(b2);
console.log(b2.nome);
console.log("------------")
/**
 * Local Storage
 */


onload = function () {
  let { nome } = JSON.parse(localStorage.getItem("nome"));
  let h1 = document.getElementById("nome");
  h1.innerHTML = nome;
}

function atualizar(element) {
  let valor = element.value;
  console.log(valor);
  let h1 = document.getElementById("nome");
  h1.innerHTML = valor;

  localStorage.setItem("nome", JSON.stringify({nome: "Vitor"})); // Sempre armazena uma string
}

// localStorage.removeItem("nome")

