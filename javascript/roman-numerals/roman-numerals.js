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
      return '';
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
      return '';
  }
};

const transformHundreds = (hundredsInteger) => {
  switch (hundredsInteger) {
    case 1:
      return 'C';
    case 2:
      return 'CC';
    case 3:
      return 'CCC';
    case 4:
      return 'CD';
    case 5:
      return 'D';
    case 6:
      return 'DC';
    case 7:
      return 'DCC';
    case 8:
      return 'DCCC';
    case 9:
      return 'CM';
    default:
      return '';
  }
};

const transformThousands = (thousandsInteger) => {
  switch (thousandsInteger) {
    case 1:
      return 'M';
    case 2:
      return 'MM';
    case 3:
      return 'MMM';
    default:
      return '';
  }
};

// Might be able to do this better with a reversed map, guarding against
// non-existent values in the array
export const toRoman = (integerToTransform) => {
  const arrayOfInts = String(integerToTransform).split('').map(Number);
  const romanUnits = transformUnits(arrayOfInts[arrayOfInts.length - 1]);
  const romanTens = transformTens(arrayOfInts[arrayOfInts.length - 2]);
  const romanHundreds = transformHundreds(arrayOfInts[arrayOfInts.length - 3]);
  const romanThousands = transformThousands(arrayOfInts[arrayOfInts.length - 4]);

  // could use .concat() but '+' works and is more readable
  return romanThousands + romanHundreds + romanTens + romanUnits;
};
