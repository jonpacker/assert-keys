var assert = require('assert');
var ak = require('../');
describe('assert-keys', function() {
  it('should throw an error when a key is missing', function() {
    assert.throws(function() {
      ak(['test', 'lol'])({lol: 'potato'});
    });
  });
  it('should not throw an error when all keys are present', function() {
    assert.doesNotThrow(function() {
      ak(['test', 'lol'])({lol: 'potato', test:45});
    });
  });
  it('should not throw on a false value', function() {
    assert.doesNotThrow(function() {
      ak(['test', 'lol'])({lol: 'potato', test:false});
    });
  });
  it('should accept inherited values in lenient mode', function() {
    assert.doesNotThrow(function() {
      var obj = Object.create({test:45}, {lol: 'potato'});
      ak(['test', 'lol'])(obj);
    });
  });
  it('should not accept inherited values in strict mode', function() {
    assert.throws(function() {
      var obj = Object.create({test:45}, {lol: 'potato'});
      ak.strict(['test', 'lol'])(obj);
    });
  });
});
