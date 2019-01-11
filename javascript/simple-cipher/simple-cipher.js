const Cipher = (inputString) => {
  const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  const inputChars = inputString.split('');

  const foo = inputChars.map((char) => {
    const charIndex = alphabetArray.indexOf(char);
    const outputCharIndex = charIndex + 3;
    const outputChar = alphabetArray[outputCharIndex];
    return outputChar;
  });

  const moo = foo.join('');
  return moo;
};

console.log(Cipher('bad'));
