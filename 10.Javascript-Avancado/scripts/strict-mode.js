"use strict"
// Case a tag strict seja ativada não será permitido criar uma variável sem declara-lá adequadamente

function imprimir() {
  x = 6; // javascript permite fazer isso, contudo esta variável automáticamente será criada no escopo global  
  console.log(x);
}

imprimir();
console.log(window);