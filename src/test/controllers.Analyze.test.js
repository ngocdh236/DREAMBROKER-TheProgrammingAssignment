const chai = require('chai');
const sinon = require('sinon');
const Controller = require('../controllers/Analyze.controller');

const { expect } = chai;

describe('Test analyze controller', () => {
  beforeEach(() => {
    res = {};
  });

  describe('Test analyze', () => {
    describe('Test empty text', () => {
      it('Should return status 400', done => {
        const req = {
          body: { text: '' }
        };

        res.status = arg => {
          expect(arg).to.deep.equal(400);
          return res;
        };

        res.json = arg => {
          expect(arg).to.deep.equal({ error: 'Text should not be empty' });
          done();
        };

        Controller.analyze(req, res);
      });
    });

    describe('Test text', () => {
      it('Should return status 400', done => {
        const req = {
          body: { text: 'Hello 2 times  ' }
        };

        res.status = arg => {
          expect(arg).to.deep.equal(200);
          return res;
        };

        res.json = arg => {
          expect(arg).to.deep.equal({
            textLength: {
              withSpaces: 15,
              withoutSpaces: 11
            },
            wordCount: 2,
            characterCount: [
              {
                e: 2
              },
              {
                h: 1
              },
              {
                i: 1
              },
              {
                l: 2
              },
              {
                m: 1
              },
              {
                o: 1
              },
              {
                s: 1
              },
              {
                t: 1
              }
            ]
          });
          done();
        };

        Controller.analyze(req, res);
      });
    });
  });
});
