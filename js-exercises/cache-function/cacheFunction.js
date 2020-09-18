const cache = {};

function cacheFunction(cb) {
  return function (...args) {
    const argKey = args.toString();
    if (!(argKey in cache)) {
      cache[argKey] = cb(args);
    }

    return cache[argKey];
  };
}

export { cacheFunction };
