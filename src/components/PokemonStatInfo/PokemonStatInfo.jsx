import {
  calculateMaxHp,
  calculateMaxOtherStats,
  calculateMinHp,
  calculateMinOtherStats,
} from '../../helpers/pokemon';

export const PokemonStatInfo = (props) => {
  const { stats, color } = props;
  const keys = Object.keys(stats);
  const { htmlName: hpHtmlName, base_stat: hpBaseStatValue } = stats['hp'];
  const otherBaseStatValue = keys.filter(key => key !== 'hp').map(key => stats[key]);

  return (
      <div>
        <div>
        <h5 className="baseStatLabel">{hpHtmlName}</h5>
        <h5 className="baseStatLabel">{hpBaseStatValue}</h5>
        <progress
          style={{ '--color': color }}
          class="stats"
          value={hpBaseStatValue}
          max={calculateMaxHp(hpBaseStatValue)}
        />
        <h5 className="baseStatLabel">{calculateMinHp(hpBaseStatValue)}</h5>    
        <h5 className="baseStatLabel">{calculateMaxHp(hpBaseStatValue)}</h5>
      </div>

      {otherBaseStatValue.map(({ htmlName: displayName, base_stat: otherBaseStatValue }) => (
        <div>
          <h5 className="baseStatLabel">{displayName}</h5>
          <h5 className="baseStatLabel">{otherBaseStatValue}</h5>
          <progress
            style={{ '--color': color }}
            class="stats"
            value={otherBaseStatValue}
            max={calculateMaxOtherStats(otherBaseStatValue)}
          />
          <h5 className="baseStatLabel">
            {calculateMinOtherStats(otherBaseStatValue)}
          </h5>
          <h5 className="baseStatLabel">
            {calculateMaxOtherStats(otherBaseStatValue)}
          </h5>
        </div>
      ))}
    </div>
  );
};
