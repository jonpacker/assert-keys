var assert = require('assert');

function KeyAsserter(keys, strict) {
  return function(obj) {
    keys.forEach(function(key) {
      assert(strict ? obj.hasOwnProperty(key) : obj[key] != null);
    });
  };
};

module.exports = function LenientKeyAsserter(keys) { 
  return KeyAsserter(keys, false);
};

module.exports.strict = function StrictKeyAsserter(keys) {
  return KeyAsserter(keys, true);
};
