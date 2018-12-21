export const solve = (x, y) => {
  // swing and a miss
  if (x > 10 || y > 10) {
    return 0;
  }

  // inside the overall target
  if (x <= 10 && y <= 10) {
    return 1;
  }
};
