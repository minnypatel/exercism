export const encode = inputString => {
  const inputArray = inputString.split('');
  let count = 1;

  const encodeChars = (char, index, array) => {
    const nextChar = array[index + 1];
    if (char !== nextChar && count === 1) {
      return char;
    } else if (char === nextChar) {
      count++;
    } else {
      const encoded = count + char;
      count = 1;
      return encoded;
    }
  };

  const getOutputArray = inputArray.map((char, index, array) =>
    encodeChars(char, index, array)
  );

  return getOutputArray.join('');
};

export const decode = inputString => {
  const inputArray = inputString.split('');

  const decodeChars = (char, index) => {
    if (isNaN(Number(char))) {

      console.log("it's a string");
    } else {
      console.log("it's a number");
    }
  };

  const getOutputArray = inputArray.map((char, index) =>
    decodeChars(char, index)
  );

  return getOutputArray.join('');

  // if char is a number, look to next char and print that many items of that char
  // if char is a letter, check the previous is a letter
  //    if so, return, if not, do nothing.
};
