export const twoFer = (name = 'you') => {
  if (name === '') {
    return 'One for you, one for me.';
  }
  return `One for ${name}, one for me.`;
};
