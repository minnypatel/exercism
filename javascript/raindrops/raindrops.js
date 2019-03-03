export const convert = (number) => {
  const raindropsArray = [];

  const factorOfThree = (number % 3 === 0);
  const factorOfFive = (number % 5 === 0);
  const factorOfSeven = (number % 7 === 0);

  if (factorOfThree) raindropsArray.push('Pling');
  if (factorOfFive) raindropsArray.push('Plang');
  if (factorOfSeven) raindropsArray.push('Plong');
  if (!(factorOfThree || factorOfFive || factorOfSeven)) {
    raindropsArray.push(number);
  }

  return raindropsArray.join('');
};
