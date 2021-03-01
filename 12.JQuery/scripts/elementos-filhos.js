// $("#lista1 > .item2").hide();

let lista1 = $("#lista1");
// lista1.find(".item2").hide(); //Filhos, netos...
console.log(lista1.children()); // Lista somente os filhos
console.log(lista1.children(".item2"));