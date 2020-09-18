function flipArgsFunction(funcToBeFlipped) {
  return function (...args) {
    return funcToBeFlipped(...args.reverse());
  };
}

export { flipArgsFunction };
