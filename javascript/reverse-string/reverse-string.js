// export const reverseString = string => string.split('').reverse().join(''); // mutation

export const reverseString = (string) => { // less mutation? Maybe not
  const reversedArray = [];
  const array = string.split('');
  array.map(x => reversedArray.unshift(x)).join('');
  const reversedString = reversedArray.join('');

  return reversedString;
};
