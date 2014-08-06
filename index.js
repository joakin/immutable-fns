
var Immutable = require('immutable');

exports.is = Immutable.is;
exports.fromJS = Immutable.fromJS;

var types = [
  'Sequence',
  'Range',
  'Repeat',
  'Vector',
  'Map',
  'OrderedMap',
  'Set',
  'Record'
];

function unbind(method) {
  return function () {
    var args = [].slice.call(arguments);
    var obj = args.pop();
    return method.apply(obj, args);
  };
}

types.forEach(function(typeStr) {
  var Type = Immutable[typeStr];
  var proto = Type.prototype;

  exports[typeStr] = Type;
  for (var prop in proto) {
    var method = proto[prop];
    if (typeof method === 'function') {
      exports[typeStr][prop] = unbind(method);
    }
  }
});

