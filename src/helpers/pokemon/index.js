export const parseIdIntoPokedexNumber = (id) =>
  `#${id.toString().padStart(3, "0")}`;
