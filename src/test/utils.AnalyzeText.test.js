const chai = require('chai');

const { expect } = chai;

const { analyzeText } = require('../utils/analyzeText');

describe('Test text analyzing util', () => {
  describe('Test text length', () => {
    const { textLength } = analyzeText('      Hello 2 times     '); // 5 spaces at the end
    it('Should count with spaces correctly', done => {
      expect(textLength.withSpaces).to.deep.equal(24);
      done();
    });

    it('Should count without spaces correctly', done => {
      expect(textLength.withoutSpaces).to.deep.equal(11);
      done();
    });
  });

  describe('Test word count', () => {
    it('Should seperate words with punctuation marks', done => {
      const { wordCount } = analyzeText(
        'What!is;your:name,Hello.world/How?are'
      );
      expect(wordCount).to.deep.equal(8);
      done();
    });

    it('Should not count marks as words', done => {
      const { wordCount } = analyzeText(
        'What is | ~ @ your - {} name ? Hello , wolrd'
      );
      expect(wordCount).to.deep.equal(6);
      done();
    });
  });

  describe('Test character count', () => {
    const { characterCount } = analyzeText('     HELLO hello!!');
    it('Should count uppercase letters and lowercase letters as the same', done => {
      expect(characterCount[2].l).to.deep.equal(4);
      done();
    });

    it('Should not count trailing spaces', done => {
      expect(characterCount[2].l).to.deep.equal(4);
      done();
    });

    it('Should not count leading spaces, return letters in alphabetical order', done => {
      expect(characterCount).to.deep.equal([
        { e: 2 },
        { h: 2 },
        { l: 4 },
        { o: 2 }
      ]);
      done();
    });
  });
});
