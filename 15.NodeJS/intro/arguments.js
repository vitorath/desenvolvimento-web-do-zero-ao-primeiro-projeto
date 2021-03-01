const { soma, mult } = require("./calc");
 
console.log(process.argv);
// 1º caminho do node
// 2º caminho do arquivo
// Restante são os adicionados

let args = process.argv.slice(2);

const x = Number(args[1]);
const y = Number(args[2]);
const op = args[0];

if (op === 's') {
  console.log(soma(x, y));
} else if (op === 'm') {
  console.log(mult(x, y));
} else {
  console.log("Opção inválida");
}


