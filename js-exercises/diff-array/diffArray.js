function diffArray(...args) {
  const arrOne = args[0];
  const arrTwo = args[1];

  const difference = arrOne.filter((x) => !arrTwo.includes(x));
  const differenceTwo = arrTwo.filter((x) => !arrOne.includes(x));
  const result = difference.concat(differenceTwo);
  return result;
}

export { diffArray };
