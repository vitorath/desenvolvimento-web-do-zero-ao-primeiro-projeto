/**
 * Funções
 */
// Bloco de execução
{
  var nota1 = 10;
  var nota2 = 9;
  var media = (nota1 + nota2) / 2;
  console.log(media);
}

function media1() {
  var nota1 = 10;
  var nota2 = 9;
  var media = (nota1 + nota2) / 2;
  console.log(media);
}

function media2(nota1, nota2) {
  var media = (nota1 + nota2) / 2;
  console.log(media);
}

function media3(nota1, nota2) {
  var media = (nota1 + nota2) / 2;
  return media;
}

media1();
media2(10, 9);
var m = media3(10, 9);
console.log(m);

function saudacao() {
  return "Olá mundo!";
}

var functionPrototype = saudacao;
console.log(functionPrototype);
console.log(functionPrototype());

// Função anônima
var calcularMedia = function(n1, n2) {
  return (n1 + n2) / 2;
}

console.log(calcularMedia(9, 10));

// Função anônima (Arrow function)
var calcularMedia = (n1, n2) => {
  return (n1 + n2) / 2;
}

console.log(calcularMedia(9, 10));
