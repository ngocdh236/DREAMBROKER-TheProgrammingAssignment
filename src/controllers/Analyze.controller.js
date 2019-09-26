const { analyzeText } = require('../utils/analyzeText');

const analyze = (req, res) => {
  const { text } = req.body;

  if (text) return res.status(200).json(analyzeText(text));
  return res.status(400).json({ error: 'Text should not be empty' });
};

module.exports = { analyze };
