function rot13(...args) {
  const encodedString = args[0];
  let decodedString = '';

  encodedString.split('').forEach((character) => {
    const charCode = character.charCodeAt(0);
    if (charCode <= 90 && charCode >= 65) {
      decodedString += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else {
      decodedString += character;
    }
  });

  return decodedString;
}

export { rot13 };
