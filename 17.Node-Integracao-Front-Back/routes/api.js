const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postsModel = require('../model/posts')

const router = express.Router();

router.use(cors({
  origin: "http://localhost:3000"
}));

router.get('/all', (req, res) => {
  res.json(postsModel.getAll());
});

router.post('/new', bodyParser.json(), (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  postsModel.newPost(title, description);

  res.send("Post adicionado");
});

module.exports = router;
