const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(3000, () => {
  console.log('Server running'); 
})

const io = socketIO(server);

const randoms = [];

io.on('connection', (socket) => {
  console.log('New connection')

  randoms.push(Math.random());

  // socket.emit('hello', { msg: 'Seja bem vindo!' });

  // Envia para todos
  io.emit('hello', { msg: `Seja bem vindo! ${randoms}` });

  // Todo mundo menos para o usuário que acabou de conectar
  socket.broadcast.emit('hello', { msg: 'Chegou novo usuário' });


  socket.on('hello_client_response', (data) => {
    console.log(data.msg);
  });
})