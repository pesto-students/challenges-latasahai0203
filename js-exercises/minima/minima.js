function minima(...args) {
  const num = args[0];
  const arrToSort = args[1];
  let sorted = [];
  const sortedArray = arrToSort.sort((firstNum, secondNum) => {
    return firstNum - secondNum;
  });
  for (let i = 0; i < num; i++) {
    sorted.push(sortedArray[i]);
  }
  return sorted;
}

export { minima };
