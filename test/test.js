const assert = require('assert')
const server = require('../app')
const request = require('supertest')(server)

describe('Test', function() {
  for(let i = 1; i <= 70; i++){
    it('test rate limit #' + i, function(done) {
      request
      .get('/')
      .end(function(err, res) {
      if(i <= 60)
        assert.equal(res.text, i)
      else
        assert.equal(res.text, 'Error')
      })
      done()
    });
  }
});
