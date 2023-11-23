export const parseIdIntoPokedexNumber = (id) =>
  `#${id.toString().padStart(3, '0')}`;

const calculateHp = (base, ev, iv) => {
  return base * 2 + 10 + ev + iv + 100;
};

export const calculateMaxHp = (base) => {
  return calculateHp(base, 63, 31);
};

export const calculateMinHp = (base) => {
  return calculateHp(base, 0, 0);
};
