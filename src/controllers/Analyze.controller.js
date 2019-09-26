const { analyzeText } = require('../utils/analyzeText');

const analyze = (req, res) => {
  const { text } = req.body;

  return res.status(200).json(analyzeText(text));
};

module.exports = { analyze };
