import { insertStatTypeOnStats } from '../../helpers/pokemon';
import { PokemonStatInfo } from '../PokemonStatInfo/PokemonStatInfo';

export const PokemonAllStats = (props) => {
  const { stats, color } = props;
  const parsedStats = insertStatTypeOnStats(stats);

  return (
    <div>
      {parsedStats.map(({ statType, displayName, baseStat }) => (
        <PokemonStatInfo
          key={statType}
          statType={statType}
          displayName={displayName}
          baseStat={baseStat}
          color={color}
        />
      ))}
    </div>
  );
};
