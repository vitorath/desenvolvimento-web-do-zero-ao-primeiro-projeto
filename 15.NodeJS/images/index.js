/**
 * Redimencionar e comprimir imagem 
 **/
const { resize } = require('imagesOperations'); 

let path = process.argv[2];
let width = Number(process.argv[3]);

resize(path,"./temp/output_resize.jpg", width);