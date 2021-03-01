const express = require('express');
const authController = require('../controllers/authController'); 
const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/', authController.authorization, adminController.sample);

module.exports = router