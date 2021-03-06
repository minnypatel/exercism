export const toRna = (dnaStrand) => {
  const transcribeDnaMap = new Map([
    ['C', 'G'],
    ['G', 'C'],
    ['T', 'A'],
    ['A', 'U'],
  ]);

  const dnaArray = dnaStrand.split('');

  const invalidInput = () => {
    throw new Error('Invalid input DNA.');
  };

  const rnaArray = dnaArray.map(char => transcribeDnaMap.get(char) || invalidInput());

  const rnaString = rnaArray.join('');

  return rnaString;
};
