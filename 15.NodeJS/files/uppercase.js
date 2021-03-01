const fs = require('fs');

const args = process.argv.slice(2);
const fileName = args[0];

fs.readFile(fileName, 'UTF8', (error, data) => {
  if (error) {
    throw error;
  }

  fs.writeFile(fileName + '_uppercase', data.toUpperCase(), (err) => {
    if (err) {
      throw err;
    } 
    console.log("Arquivo gerado com sucesso");
  })
});