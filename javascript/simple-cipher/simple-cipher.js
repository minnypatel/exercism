// const Cipher = (inputString, instruction) => {
//   const alphabetArray = [
//     'a', 'b', 'c', 'd', 'e',
//     'f', 'g', 'h', 'i', 'j',
//     'k', 'l', 'm', 'n', 'o',
//     'p', 'q', 'r', 's', 't',
//     'u', 'v', 'w', 'x', 'y',
//     'z',
//   ];


//   if (instruction === 'encode') {
//     const inputChars = inputString.split('');

//     const encodedInpurChars = inputChars.map((char) => {
//       const charIndex = alphabetArray.indexOf(char);
//       const outputCharIndex = charIndex + 3;
//       const outputChar = alphabetArray[outputCharIndex];
//       return outputChar;
//     });

//     const encodedOutput = encodedInpurChars.join('');
//     return encodedOutput;
//   }

//   const inputChars = inputString.split('');

//   const encodedInpurChars = inputChars.map((char) => {
//     const charIndex = alphabetArray.indexOf(char);
//     const outputCharIndex = charIndex - 3;
//     const outputChar = alphabetArray[outputCharIndex];
//     return outputChar;
//   });

//   const encodedOutput = encodedInpurChars.join('');
//   return encodedOutput;
// };


export class Cipher {
  constructor(input) {
    this.input = input;
  }

  encode() {};

  decode() {};
}

// const cipher = new Cipher('sda');

// console.log(cipher);
