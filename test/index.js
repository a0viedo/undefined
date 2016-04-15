var test = require('tap').test;
var undefinedModule = require('../index');

test('should be the same as an uninitialized property of an object', function(t) {
  t.equal(undefinedModule, {}.thisPropertyIsNotInitialized);
  t.end();
});

test('should be the same as an unassigned variable', function(t) {
  var variableWithNoAssignment;
  t.equal(undefinedModule, variableWithNoAssignment);
  t.end();
})