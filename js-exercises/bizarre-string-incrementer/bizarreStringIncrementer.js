function bizarreStringIncrementer(str) {
  let lastChar = parseInt(str[str.length - 1]);
  let numberToAppend = '';
  let index = str.length - 1;
  let shouldIncrement = true;

  while (!isNaN(lastChar) && index >= 0) {
    index -= 1;
    if (lastChar === 9) {
      numberToAppend = '0'.concat(numberToAppend);
      shouldIncrement = true;
    } else {
      numberToAppend =
        (shouldIncrement ? (lastChar + 1).toString() : lastChar) +
        numberToAppend;

      shouldIncrement = false;
    }
    lastChar = parseInt(str[index]);
  }

  if (numberToAppend === '' || (numberToAppend === '0' && shouldIncrement)) {
    numberToAppend = '1'.concat(numberToAppend);
  }

  return str.substring(0, index + 1).concat(numberToAppend);
}

export { bizarreStringIncrementer };
