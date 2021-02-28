/**
 * Example
 */
// Nome do aluno - nota 1 - nota 2 -  Aprovado/Reprovado
var nomes = ['Vitor', 'Ana', 'Pedro'];
var notasA = [7.9, 6.5, 7.0];
var notasB = [10, 8, 9.2];

function calcMedia(n1, n2) {
  return (n1 + n2) / 2;
}

function aprovar(media) {
  if (media > 7) {
    return "Aprovado";
  }
  return "Reprovado";
}

for (var index in nomes) {
  var nota1 = notasA[index];
  var nota2 = notasB[index];
  var media = calcMedia(nota1, nota2);
  console.log(nomes[index] + " - " +
              nota1 + " - " + 
              nota2 + " - " + 
              media + " - " +
              aprovar(media));
}

