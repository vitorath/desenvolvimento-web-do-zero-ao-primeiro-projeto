const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

require('dotenv').config();

const PORT = process.env.PORT;

const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  secure: process.env.MAILER_SECURE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
})

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<a href="/contato.html">contato</a>');
});

app.post('/contato', (req, res) => {
  const { subject, message, emailaddress: email } = req.body;

  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: subject,
    text: message
  }).then(info => {
    res.send("Mensagem Enviada com sucesso");
  }).catch(err => {
    res.send("Ocorreu um erro no envio");
  })
  
  res.send('Contato Post')
})

app.listen(PORT, () => {
  console.log('Server listing on port %s', PORT);
});