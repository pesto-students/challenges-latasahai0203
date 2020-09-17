function balancedBraces(...args) {
  const input = args[0];
  const stack = [];

  for (let i = 0; i <= input.length; i += 1) {
    if (input[i] === '{' || input[i] === '[' || input[i] === '(') {
      stack.push(input[i]);
    }

    if (input[i] === '}' || input[i] === ']' || input[i] === ')') {
      const top = stack.pop();
      if (top === '[' && input[i] !== ']') return false;
      if (top === '{' && input[i] !== '}') return false;
      if (top === '(' && input[i] !== ')') return false;
    }
  }
  if (stack.length !== 0) return false;

  return true;
}

export { balancedBraces };
