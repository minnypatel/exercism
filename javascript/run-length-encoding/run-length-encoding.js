export const encode = (inputString) => {
  const inputArray = inputString.split('');
  let count = 1;

  const foo = (inputArray, char) => {
    const moo = inputArray.indexOf(char);
    console.log({moo});
    // if (char === inputArray
  }

  const outputArray = inputArray.map(char => foo(inputArray, char));
  const outputString = outputArray.join('');
  return outputString;
};

export const decode = () => {};