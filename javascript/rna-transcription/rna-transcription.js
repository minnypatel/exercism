export const toRna = (dnaStrand) => {
  const dnaArray = dnaStrand.split('');
  const newArray = dnaArray.map((x) => {
    if (x === 'C') { return 'G'; }
    if (x === 'G') { return 'C'; }
    if (x === 'T') { return 'A'; }
    if (x === 'A') { return 'U'; }
    throw new Error('Invalid input DNA.');
  });

  const rnaString = newArray.join('');
  return rnaString;
};
