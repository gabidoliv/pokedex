import { calculateMaxStats, calculateMinStats } from '../../helpers/pokemon';

export const PokemonStatInfo = (props) => {
  const { statType, displayName, baseStat, color } = props;

  return (
    <div>
      <h5 className="baseStatLabel">{displayName}</h5>
      <h5 className="baseStatLabel">{baseStat}</h5>
      <progress
        style={{ '--color': color }}
        className="stats"
        value={baseStat}
        max={calculateMaxStats(baseStat, statType)}
      />
      <h5 className="baseStatLabel">{calculateMinStats(baseStat, statType)}</h5>
    </div>
  );
};
