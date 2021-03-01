require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');

const securityController = require('./controllers/securityController');

const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');

mongoose.connect(process.env.MONGO_CONNECTION_URL, 
  { 
    auth: { authSource: 'admin' },
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Mongo Connected');
    }
  });

const app = express();

app.use('*', securityController.forceHttps);

app.use('/user', express.json(), userRouter);

app.use('/admin', express.json(), adminRouter);

app.listen(process.env.PORT, () => {
  console.log('Server Running');
});