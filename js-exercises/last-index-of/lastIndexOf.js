function lastIndexOf(...args) {
  const firstArg = args[0];
  const secondArg = args[1];
  let lastIndex = -1;

  for (let i = 0; i <= secondArg.length; i += 1) {
    if (firstArg === secondArg[i]) lastIndex = i;
  }
  return lastIndex;
}

export { lastIndexOf };
