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
  [undefined, ''],
  [0, ''],
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
  [undefined, ''],
  [0, ''],
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
  [undefined, ''],
  [0, ''],
]);

const transformThousandsMap = new Map([
  ['1', 'M'],
  ['2', 'MM'],
  ['3', 'MMM'],
  [undefined, ''],
  [0, ''],
]);

// Might be able to do this better with a reversed map, guarding against
// non-existent values in the array
export const toRoman = (integerToTransform) => {
  const integerSplitIntoArray = String(integerToTransform).split('');
  const romanUnits = transformUnitsMap.get(integerSplitIntoArray[integerSplitIntoArray.length - 1]);
  const romanTens = transformTensMap.get(integerSplitIntoArray[integerSplitIntoArray.length - 2]);
  const romanHundreds = transformHundredsMap.get(integerSplitIntoArray[integerSplitIntoArray.length - 3]);
  const romanThousands = transformThousandsMap.get(integerSplitIntoArray[integerSplitIntoArray.length - 4]);

  // falsey values break it
  return romanThousands + romanHundreds + romanTens + romanUnits;
};
