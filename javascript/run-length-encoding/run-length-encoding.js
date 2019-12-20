export const encode = inputString => {
  const inputArray = inputString.split('');
  let count = 1;

  const encodeChars = (char, index, array) => {
    const nextCharIndex = index + 1;
    const nextChar = array[nextCharIndex];

    if (char === nextChar) {
      count++;
    } else if (char !== nextChar && count === 1) {
      return char;
    } else {
      const encoded = count + char;
      count = 1;
      return encoded;
    }
  };

  const outputArray = inputArray.map((char, index, array) =>
    encodeChars(char, index, array)
  );
  const outputString = outputArray.join('');
  return outputString;
};

export const decode = () => {};
