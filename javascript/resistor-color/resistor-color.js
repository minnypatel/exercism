export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow"
  ,"green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const colorCode = (input) => {
  return COLORS.findIndex(foo => foo === input);
};
