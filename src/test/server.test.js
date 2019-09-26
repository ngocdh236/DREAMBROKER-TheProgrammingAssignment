const chai = require('chai');
const chaiHttp = require('chai-http');
var app = require('../../server.js');

const { expect } = chai;
chai.use(chaiHttp);

describe('Test server', () => {
  describe('GET /', function() {
    it('respond with hello world', function(done) {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res.text).equals('Hello World');
          done();
        });
    });
  });
});
