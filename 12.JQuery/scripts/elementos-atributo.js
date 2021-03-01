// Selecionando e Removendo por atributo
$("[key = 2]")
  .remove();

$("#lista1")
  .find("[key = 3]")
  .remove();

// Limpar lista
$("#lista2")
  .empty(); 

$("#lista1")
  .find("li")
  .remove('[key = 1], [key = 4]')

// Adicionando items (aceita mais de um argumento)
$("#lista1")
  .append(`<li key="6">Novo item fim (dentro)</li>`);

$("#lista1")
  .prepend(`<li key="0">Novo item inicio (dentro)</li>`);


// Adicionar antes e depois do elemento (aceita mais de um argumento)
$("#lista1")
  .before(`<li key="0">Novo item inicio (fora)</li>`)
  .after(`<li key="1">Novo item fim (fora)</li>`);