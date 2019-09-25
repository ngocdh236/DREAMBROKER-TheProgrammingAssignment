const analyzeText = (req, res) => {
  const { text } = req.body;

  const englishLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const specialCharacters = '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?'.split('');

  const characters = text.split('');

  const withSpaces = characters.length;

  const numberOfSpaces = text.split('').filter(character => character === ' ')
    .length;

  const withoutSpaces = withSpaces - numberOfSpaces;

  const wordCount = text
    .split(' ')
    .filter(word => !specialCharacters.includes(word) && word.length > 0)
    .length;

  const characterCount = characters => {
    const uniqueCharacters = characters
      .reduce((letters, character) => {
        if (
          englishLetters.includes(character) &&
          !letters.includes(character)
        ) {
          return [...letters, character];
        }
        return letters;
      })
      .sort();
    return uniqueCharacters.map(character =>
      JSON.parse(
        `{"${character}":"${
          characters.filter(element => element === character).length
        }"}`
      )
    );
  };

  return res.json({
    textLength: { withSpaces, withoutSpaces },
    wordCount,
    characterCount: characterCount(characters)
  });
};

module.exports = { analyzeText };
