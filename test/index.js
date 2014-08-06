
var test = require('tape');

var Immutable = require('../index.js');

test('Exposes Immutable data structures', function(t) {
  var m = Immutable.Map({a: 1});
  t.equal(m.get('a'), 1);
  t.end();
});

test('Exposes Immutable static functions for data structures', function(t) {
  var m = Immutable.Map({a: 1});
  var get = Immutable.Map.get;
  t.equal(get('a', m), 1);
  t.end();
});
