var assign = Object.assign || require('object-assign');
var stringify = require('./stringify');

/**
 * Provides memoization for a given function.
 *
 * It is important to notice that it is not
 * everytime that memoization will be
 * interesting. In some situations executing the
 * fuction per se is less costing than using
 * memoize method.
 */
function Memoizer (f) {
  if (!(this instanceof Memoizer))
    return new Memoizer(f);

  if (!f) throw new Error('Memoizer expects a function');

  this._cache = {};
  this.f = f;
}

assign(Memoizer.prototype, {
  /**
   * Prepares the function for memoization.
   */
  _memoize (...args) {
    var param = stringify(args);

    return (param in this._cache) ?
      this._cache[param] :
      this._cache[param] = this.f.apply(null, args);
  },

  /**
   * Releases the internal cache
   */
  release: () => {
    _cache = {};
  },

  /**
   * Initializer
   */
  init () {
    return () =>
      this._memoize.apply(this, [].slice.call(arguments));
  }
});

module.exports = Memoizer;
