const express = require('express');
const Controller = require('../controllers/TextAnalyze');

const router = express.Router();

router.route('/').get(Controller.analyzeText);

module.exports = router;
