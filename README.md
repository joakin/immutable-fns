
Immutable functions
===================

This library provides a wrapper around the package
[immutable](https://github.com/facebook/immutable-js) exposing the same API but
adding static functions to the data types that are exactly the same as the ones
in **immutable** but accepting the object to act on as the last argument.

Docs
----

Check out [immutable's API](https://github.com/facebook/immutable-js), this
library provides exactly the same but the object methods have been converted
into static methods on the class taking the object to act on as the last
argument.

For example:

```javascript
// On the immutable-js api
// Immutable.Map({}).get('key')
// Added on this library
// Immutable.Map.get('key', map)
```

Examples
--------

```javascript
var Immutable = require('immutable-fns');
var get = Immutable.Map.get;

// Create an immutable data structure
var m = Immutable.Map({a: 1});

// We can use the traditional api (obj.method(param)) or use the functional API
// (fn(...params, obj))
assert.equal(m.get('a'), get('a', m));
```

