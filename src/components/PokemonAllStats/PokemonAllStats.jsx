import {
  getPokemonColorByType,
  insertStatTypeOnStats,
  parseStats,
} from '../../helpers/pokemon';
import { PokemonStatInfo } from '../PokemonStatInfo/PokemonStatInfo';

export const PokemonAllStats = (props) => {
  const { pokemon } = props;

  const baseStats = parseStats(pokemon.stats);
  const parsedStats = insertStatTypeOnStats(baseStats);
  const color = pokemon ? getPokemonColorByType(pokemon.types) : null;

  return (
    <div>
      <h3 style={{ color: color }}>Base Stats</h3>
      {parsedStats.map(({ statType, displayName, baseStat }) => (
        <PokemonStatInfo
          key={statType}
          statType={statType}
          displayName={displayName}
          baseStat={baseStat}
          color={color}
        />
      ))}
      <h5 className="baseStatLabel">Total</h5>
    </div>
  );
};
