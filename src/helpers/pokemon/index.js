import { POKEMON_COLOR_PER_TYPE } from '../../constants/pokemon';

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

export const calculateMinStats = (base, statType) => {
  if (statType === 'hp') return calculateMinHp(base);
  return calculateMinOtherStats(base);
};

export const calculateMaxStats = (base, statType) => {
  if (statType === 'hp') return calculateMaxHp(base);
  return calculateMaxOtherStats(base);
};

export const parseStats = (stats) => {
  const translateStatToCamelCase = {
    hp: {
      statType: 'hp',
      displayName: 'HP',
    },
    attack: {
      statType: 'attack',
      displayName: 'Attack',
    },
    defense: {
      statType: 'defense',
      displayName: 'Defense',
    },
    'special-attack': {
      statType: 'specialAttack',
      displayName: 'Special Attack',
    },
    'special-defense': {
      statType: 'specialDefense',
      displayName: 'Special Defense',
    },
    speed: {
      statType: 'speed',
      displayName: 'Speed',
    },
  };

  return stats.reduce((acc, cur) => {
    const { base_stat: baseStat, stat } = cur;

    const { statType, displayName } = translateStatToCamelCase[stat.name];

    return { ...acc, [statType]: { baseStat, displayName } };
  }, {});
};

export const getPokemonColorByType = (types) => {
  // It will show only the color related to the first type
  const [firstType] = types;

  const typeName = firstType.type.name;

  const color = POKEMON_COLOR_PER_TYPE[typeName];

  return color;
};

export const insertStatTypeOnStats = (stats) => {
  const keys = Object.keys(stats);
  
  return keys.map((key) => ({
    ...stats[key],
    statType: key,
  }));
};
