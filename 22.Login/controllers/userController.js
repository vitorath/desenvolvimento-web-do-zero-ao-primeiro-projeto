const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const validateController = require('./validateController');

const userController = {
  register: async function register(req, res) {

    const { error } = validateController.register(req.body);
    if (error) {
      return res.status(400).send(error.message);
    }

    const selectedUser = await User.findOne({ email: req.body.email });

    if (selectedUser) {
      return res.status(400).send({ message: 'Email already exists' });
    }

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password)
    });

    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch(error) {
      res.status(400).send(error)
    }
  },
  
  login: async function login(req, res) {

    const { error } = validateController.login(req.body);
    if (error) {
      return res.status(400).send(error.message);
    }

    const selectedUser = await User.findOne({ email: req.body.email });

    if (!selectedUser) {
      return res.status(403).send({ message: 'Email or password incorrect' });
    }

    const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);

    if (!passwordAndUserMatch) {
      return res.status(403).send({ message: 'Email or password incorrect' });
    }

    const token = jwt.sign({ _id: selectedUser.id, admin: selectedUser.admin }, process.env.TOKEN_SECRET, { expiresIn: 3600 });

    res.header('authorization-token', token);
    res.send({ message: 'User logged' });
  }
}

module.exports = userController;

