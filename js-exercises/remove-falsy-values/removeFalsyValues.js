function removeFalsyValues(array) {
  const result = array.filter(
    (item) =>
      !(
        item === '' ||
        item === undefined ||
        !!item === !!NaN ||
        item === false ||
        item === null ||
        item === 0
      )
  );
  return result;
}

export { removeFalsyValues };
