/**
 * Estruturas condicionais - IF
 */
var idade = 17;
if (idade > 35 || idade < 70) {
  console.log("pode");
  console.log("Qual o seu pedido?");
} else if (idade >= 18) {
  console.log("pode");
  console.log("Mostre sua identidade");
} else {
  console.log("não pode");
  console.log("Volte futuramente");
}

/**
 * Estruturas condicionais - Operador ternário
 */

idade = 17;
var pode = idade >= 18 ? 'Pode' : 'Não pode';
console.log(pode);
/**
 * Estruturas condicionais - Switch
 */
var nota1 = 5.0;
var nota2 = 5.8;
var media = (nota1 + nota2) / 2;

var conceito = "";


if (media >= 8.5) {
  conceito = "Ótimo";
} else if ( media >= 6.5) {
  conceito = "Bom";
}else {
  conceito = "Regular";
}

switch(conceito) {
  case "Ótimo":
    console.log("Parabéns, vpcê é um ótimo aluno");
    break;
  case "Bom":
    console.log("Você já está quase perfeito");
    break;
  case "Regular":
    console.log("Estude mais um pouco");
    break;
  default:
    console.log("Houve algum erro");
    break;
}
