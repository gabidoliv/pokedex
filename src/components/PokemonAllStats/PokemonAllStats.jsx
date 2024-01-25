import {
  calculateMaxHp,
  calculateMaxOtherStats,
  calculateMaxStats,
  calculateMinHp,
  calculateMinOtherStats,
  calculateMinStats,
} from '../../helpers/pokemon';

export const PokemonAllStats = (props) => {
  const { stats, color } = props;
  const keys = Object.keys(stats);
  const statValues = keys.map((key) => ({
    ...stats[key],
    statType: key,
  }));

  return (
    <div>
      {statValues.map(({ statType, displayName, baseStat }) => (
        <div key={statType}>
          <h5 className="baseStatLabel">{displayName}</h5>
          <h5 className="baseStatLabel">{baseStat}</h5>
          <progress
            style={{ '--color': color }}
            className="stats"
            value={baseStat}
            max={calculateMaxStats(baseStat, statType)}
          />
          <h5 className="baseStatLabel">{calculateMinStats(baseStat, statType)}</h5>
          <h5 className="baseStatLabel">{calculateMaxStats(baseStat, statType)}</h5>
        </div>
      ))}
    </div>
  );
};
