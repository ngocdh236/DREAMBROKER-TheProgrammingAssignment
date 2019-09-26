const express = require('express');
const Controller = require('../controllers/Analyze.controller');

const router = express.Router();

router.route('/').get(Controller.analyze);

module.exports = router;
