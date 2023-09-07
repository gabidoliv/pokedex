export const toCapitalLetter = (word) => {
  const [firstLetter = "", ...rest] = word;

  const capitalLetter = firstLetter.toUpperCase();
  const parsedRest = rest.join("").toLowerCase();

  return capitalLetter + parsedRest;
}