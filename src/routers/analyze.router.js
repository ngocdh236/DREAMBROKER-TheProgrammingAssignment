const express = require('express');
const Controller = require('../controllers/Analyze.controller');

const router = express.Router();

router.route('/').post(Controller.analyze);

module.exports = router;
