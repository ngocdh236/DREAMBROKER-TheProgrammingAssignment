const analyzeText = (req, res) => {
  const { text } = req.body;

  const englishLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const specialCharacters = '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?'.split('');

  const characters = text.toLowerCase().split('');

  const withSpaces = characters.length;

  const numberOfSpaces = text.split('').filter(character => character === ' ')
    .length;

  const withoutSpaces = withSpaces - numberOfSpaces;

  // Take care of punctuation marks
  var newText = text;
  newText = newText.replace(/!/g, ' ');
  newText = newText.replace(/;/g, ' ');
  newText = newText.replace(/;/g, ' ');
  newText = newText.replace(/,/g, ' ');
  newText = newText.replace(/\./g, ' ');
  newText = newText.replace(/\//g, ' ');
  newText = newText.replace(/\?/g, ' ');

  const wordCount = newText
    .split(' ')
    .filter(word => !specialCharacters.includes(word) && word.length > 0) // Exclude marks
    .length;

  const uniqueCharacters = characters
    .reduce((letters, character) => {
      if (englishLetters.includes(character) && !letters.includes(character)) {
        return [...letters, character];
      }
      return letters;
    })
    .sort();

  const characterCount = uniqueCharacters.map(character =>
    JSON.parse(
      `{"${character}":"${
        characters.filter(element => element === character).length
      }"}`
    )
  );

  return res.json({
    textLength: { withSpaces, withoutSpaces },
    wordCount,
    characterCount
  });
};

module.exports = { analyzeText };
