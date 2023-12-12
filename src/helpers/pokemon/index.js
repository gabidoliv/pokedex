import { POKEMON_COLOR_PER_TYPE } from "../../constants/pokemon";

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

const calculateOtherStats = (base, ev, iv, nature) => {
  return (base * 2 + 5 + ev + iv) * nature;
};

export const calculateMaxOtherStats = (base) => {
  return calculateOtherStats(base, 63, 31, 1.1);
};

export const calculateMinOtherStats = (base) => {
  return calculateOtherStats(base, 0, 0, 0.9);
};

export const parseStats = (stats) => {
  const translateStatToCamelCase = {
    hp: 'hp',
    attack: 'attack',
    defense: 'defense',
    'special-attack': 'specialAttack',
    'special-defense': 'specialDefense',
    speed: 'speed',
  };

  return stats.reduce((acc, cur) => {
    const { base_stat, stat } = cur;

    const statName = translateStatToCamelCase[stat.name];

    return { ...acc, [statName]: base_stat };
  }, {});
};

export const getPokemonColorByType = (types) => {
  // It will show only the color related to the first type
  const [firstType] = types;

  const typeName = firstType.type.name;

  const color = POKEMON_COLOR_PER_TYPE[typeName];

  return color;
};
