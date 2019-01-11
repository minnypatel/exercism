const Cipher = (inputChar) => {
  const alphabetArray = ['a', 'b', 'c', 'd', 'e'];

  // find inputChar in alphabetArray
  // count 4 along the array and return as outputChar
  // wrapper function to split and join multiple char input

  const inputCharIndex = alphabetArray.indexOf(inputChar);
  const outputCharIndex = inputCharIndex + 4;
  return outputCharIndex;
};

console.log(Cipher('a'));
