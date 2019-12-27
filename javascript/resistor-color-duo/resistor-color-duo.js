const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const decodedValue = ([color1, color2]) => {
  return Number(`${COLORS.indexOf(color1)}${COLORS.indexOf(color2)}`)
};