import { calculateMaxStats, calculateMinStats } from '../../helpers/pokemon';

export const PokemonStatInfo = (props) => {
  const { statType, displayName, baseStat, color } = props;

  return (
    <div className="pokemonStatInfoContainer">
      <h5 className="baseStatLabel">{displayName}</h5>

      <div className="rightContainer">
        <h5 className="baseStatLabel">{baseStat}</h5>
        <progress
          style={{ '--color': color }}
          className="stats"
          value={baseStat}
          max={calculateMaxStats(baseStat, statType)}
        />
        <h5 style={{ marginRight: 8 , justifyContent:'end'}} className="baseStatLabel">
          {calculateMinStats(baseStat, statType)}
        </h5>
        <h5 className="baseStatLabel">
          {calculateMaxStats(baseStat, statType)}
        </h5>
      </div>
    </div>
  );
};
