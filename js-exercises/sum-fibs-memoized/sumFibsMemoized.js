let cache = {};

function sumFibs(num) {
  let fibFirst = 1;
  let fibSecond = 1;

  if (num <= fibFirst) {
    return 0;
  }

  let fib = 0;
  let sum = fibFirst + fibSecond;

  while (fib < num) {
    if (fib % 2 !== 0) {
      sum += fib;
    }

    fib = fibFirst + fibSecond;

    fibFirst = fibSecond;
    fibSecond = fib;
  }

  return sum;
  //
}

function cachedFunction(arg) {
  if (!(arg + '') in cache) {
    cache[arg + ''] = sumFibs(num);
  }

  return cache[num + ''];
}

function cacheFunction(func) {
  return sumFibsMemoized;
}

export { sumFibs, cacheFunction };
