
export const gigasecond = (birthdate) => {
  const birthdateInUnixTime = birthdate.getTime();
  const gigabirthdayInUnixTime = birthdateInUnixTime + 1000000000000;
  const gigabirthday = new Date(gigabirthdayInUnixTime);
  return gigabirthday;
};
