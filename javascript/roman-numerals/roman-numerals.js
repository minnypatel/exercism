const transformUnits = (unitsInteger) => {
  switch (unitsInteger) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
    default:
      return 'ERROR';
  }
};

const transformTens = (tensInteger) => {
  switch (tensInteger) {
    case 1:
      return 'X';
    case 2:
      return 'XX';
    case 3:
      return 'XXX';
    case 4:
      return 'XL';
    case 5:
      return 'L';
    case 6:
      return 'LX';
    case 7:
      return 'LXX';
    case 8:
      return 'LXXX';
    case 9:
      return 'XC';
    default:
      return 'ERROR';
  }
};

export const toRoman = (integerToTransform) => {
  const arrayOfInts = String(integerToTransform).split('').map(Number);
  const foo = arrayOfInts.pop();
  const moo = transformUnits(foo);
  const woo = arrayOfInts.pop();
  const loo = transformTens(woo);

  return loo.concat(moo);
};
