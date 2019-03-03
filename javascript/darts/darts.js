export const solve = (x, y) => {
  const foo = (x ** 2) + (y ** 2);

  if (foo <= 1) return 10;
  if (foo <= 25) return 5;
  if (foo <= 100) return 1;
  if (foo > 100) return 0;
  return null;
};
