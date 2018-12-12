export const isLeap = (year) => {
  const divisibleByFour = year % 4 === 0;
  const divisibleByOneHundred = year % 100 === 0;
  const divisibleByFourHundred = year % 400 === 0;

  const simpleLeap = divisibleByFour && !divisibleByOneHundred;
  const complexLeap = divisibleByFour && divisibleByOneHundred && divisibleByFourHundred;

  return simpleLeap || complexLeap;
};
