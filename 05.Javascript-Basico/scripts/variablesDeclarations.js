var numero1 = 4; // normalmente utilizar no escopo global da aplicação
let numero2 = 5; // Pode ser modificada;
const numero3 = 6; // Não pode ser re-instaciada ou re-atribuida
const obj = {};

obj.nome = "Vitor"

console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(obj);


{
  var numero4 = 4; 
  let numero5 = 5;
  const numero6 = 6;
}

console.log(numero4); // Por ser escopo global, é exibida
console.log(numero5); // Não é exibida pois só existe no bloco
console.log(numero6); // Não é exibida pois só existe no bloco