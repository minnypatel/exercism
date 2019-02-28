const transformUnitsMap = new Map([
  ['1', 'I'],
  ['2', 'II'],
  ['3', 'III'],
  ['4', 'IV'],
  ['5', 'V'],
  ['6', 'VI'],
  ['7', 'VII'],
  ['8', 'VIII'],
  ['9', 'IX'],
  ['0', ''],
  [undefined, ''],
]);

const transformTensMap = new Map([
  ['1', 'X'],
  ['2', 'XX'],
  ['3', 'XXX'],
  ['4', 'XL'],
  ['5', 'L'],
  ['6', 'LX'],
  ['7', 'LXX'],
  ['8', 'LXXX'],
  ['9', 'XC'],
  ['0', ''],
  [undefined, ''],
]);

const transformHundredsMap = new Map([
  ['1', 'C'],
  ['2', 'CC'],
  ['3', 'CCC'],
  ['4', 'CD'],
  ['5', 'D'],
  ['6', 'DX'],
  ['7', 'DCC'],
  ['8', 'DCCC'],
  ['9', 'CM'],
  ['0', ''],
  [undefined, ''],
]);

const transformThousandsMap = new Map([
  ['1', 'M'],
  ['2', 'MM'],
  ['3', 'MMM'],
  ['0', ''],
  [undefined, ''],
]);

// I don't like how I'm doing this but can't get my head round a better solution at the moment
export const toRoman = (integerToTransform) => {
  const integerSplitIntoArray = String(integerToTransform).split('');
  const romanUnits = transformUnitsMap.get(integerSplitIntoArray[integerSplitIntoArray.length - 1]);
  const romanTens = transformTensMap.get(integerSplitIntoArray[integerSplitIntoArray.length - 2]);
  const romanHundreds = transformHundredsMap.get(integerSplitIntoArray[integerSplitIntoArray.length - 3]);
  const romanThousands = transformThousandsMap.get(integerSplitIntoArray[integerSplitIntoArray.length - 4]);

  return romanThousands + romanHundreds + romanTens + romanUnits;
};
