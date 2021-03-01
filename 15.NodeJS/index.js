const http = require('http');
const url = require('url');
const fs = require('fs');

function handleFile(request, response, callback) {
  let path = url.parse(request.url).pathname;

  if (path === "" || path === "/") {
    path = "/web-http/index";
  }

  let fileName = "." + path + ".html";

  fs.readFile(fileName, (err, data) => {
    if (err) {

      if (!callback) {
        return;
      }

      if (!callback(request, response)) {
        response.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
        response.end('<h1>Página não encontrada</h1>')
      } else {
        response.end();
      }
      
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    }
  })
}

function handleRequest(request, response) {
  let path = url.parse(request.url).pathname;

  let method = request.method;

  if (method === 'PUT') {
    response.writeHead(404, {'Content-Type': 'text/html'});
  }

  if (path === "/teste") {
    response.end("Teste");
    return true;
  }

  return false;
}

http.createServer((request, response) => {
  handleFile(request, response, handleRequest);
}).listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Servidor rodando na porta 3000");
  }
});