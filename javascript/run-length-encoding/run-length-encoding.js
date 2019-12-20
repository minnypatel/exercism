export const encode = inputString => {
  const inputArray = inputString.split('');
  let count = 1;

  const foo = (char, index, array) => {
    const nextCharIndex = index + 1;
    const nextChar = array[nextCharIndex];

    if (char === nextChar) {
      count++;
    } else {
      const encoded = count + char;
      count = 1;
      return encoded;
    }
  };

  const outputArray = inputArray.map((char, index, array) =>
    foo(char, index, array)
  );
  const outputString = outputArray.join('');
  return outputString;
};

export const decode = () => {};
