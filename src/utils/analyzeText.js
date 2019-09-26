exports.analyzeText = text => {
  if (!text)
    return {
      textLength: {
        withSpaces: 0,
        withoutSpaces: 0
      },
      wordCount: 0,
      characterCount: []
    };

  const englishLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const characters = text.toLowerCase().split('');

  const withSpaces = characters.length;

  const numberOfSpaces = text.split('').filter(character => character === ' ')
    .length;

  const withoutSpaces = withSpaces - numberOfSpaces;

  // Take care of punctuation marks
  var newText = text;
  newText = newText.replace(/!/g, ' ');
  newText = newText.replace(/;/g, ' ');
  newText = newText.replace(/:/g, ' ');
  newText = newText.replace(/,/g, ' ');
  newText = newText.replace(/\./g, ' ');
  newText = newText.replace(/\//g, ' ');
  newText = newText.replace(/\?/g, ' ');

  const wordCount = newText
    .split(' ')
    .filter(word => word.length > 0 && word.match(/[a-z0-9]/i)).length; // Exclude marks

  const uniqueCharacters = text
    .trim()
    .toLowerCase()
    .split('')
    .reduce((letters, character) => {
      if (englishLetters.includes(character) && !letters.includes(character)) {
        return [...letters, character];
      }
      return letters;
    })
    .sort();

  const characterCount = uniqueCharacters.map(character =>
    JSON.parse(
      `{"${character}":${
        characters.filter(element => element === character).length
      }}`
    )
  );

  console.log(characterCount);
  console.log(newText);

  return {
    textLength: { withSpaces, withoutSpaces },
    wordCount,
    characterCount
  };
};
