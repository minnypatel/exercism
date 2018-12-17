export const toRna = (dnaStrand) => {
  const dnaArray = dnaStrand.split();
  const newArray = dnaArray.map((x) => {
    if (x === 'C') { return 'G'; }
    if (x === 'G') { return 'C'; }
  });

  const rnaStrang = newArray.join('');
  return rnaStrang;
};
