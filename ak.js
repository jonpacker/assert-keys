var assert = require('assert');
var util = require('util');

function KeyAsserter(keys, strict) {
  return function(obj) {
    keys.forEach(function(key) {
      assert(strict ? obj.hasOwnProperty(key) : obj[key] != null,
             "The key `" + key + "` is required, but was not found in object: " +
             util.inspect(obj));
    });
  };
};

module.exports = function LenientKeyAsserter(keys) { 
  return KeyAsserter(keys, false);
};

module.exports.strict = function StrictKeyAsserter(keys) {
  return KeyAsserter(keys, true);
};
