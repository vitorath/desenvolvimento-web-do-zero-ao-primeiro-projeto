const { log } = require('console');
let fs = require('fs');

// Criar/Re-criar
fs.writeFile('files/test.txt', 'Hello world', function (error) {
  if (error) {
    throw error;
  } 

  console.log("Arquivo criado com sucesso");
});

// Concatenar arquivos
fs.appendFile('files/test.txt', ' - Olá mundo', function (error) {
  if (error) {
    throw error;
  } 

  console.log("Arquivo atualizado com sucesso");
});

fs.readFile('files/test.txt', 'UTF8', function (error, data) {
  if (error) {
    throw error;
  } 

  console.log(data);
});

// Apagar arquivo
fs.rename('files/test.txt', 'files/test2.txt', function (error) {
  if (error) {
    throw error;
  } 

  console.log("Arquivo renomeado com sucesso");
});

// Apagar arquivo
fs.unlink('files/test.txt', function (error) {
  if (error) {
    throw error;
  } 

  console.log("Arquivo apagado com sucesso");
});