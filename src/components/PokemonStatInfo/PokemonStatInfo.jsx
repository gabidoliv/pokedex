import {
  calculateMaxHp,
  calculateMaxOtherStats,
  calculateMinHp,
  calculateMinOtherStats,
} from '../../helpers/pokemon';

export const PokemonStatInfo = (props) => {
  const { statHP, statOther, statColor, name } = props;

  return (
      <div>
        <div>
        <h5 className="baseStatLabel">HP {name}</h5>
        <h5 className="baseStatLabel">{statHP}</h5>
        <progress
          style={{ '--color': statColor }}
          class="stats"
          value={statHP}
          max={calculateMaxHp(statHP)}
        />
        <h5 className="baseStatLabel">{calculateMinHp(statHP)}</h5>    
        <h5 className="baseStatLabel">{calculateMaxHp(statHP)}</h5>
      </div>

      {statOther.map((stat) => (
        <div>
          <h5 className="baseStatLabel">Titulo</h5>
          <h5 className="baseStatLabel">{stat}</h5>
          <progress
            style={{ '--color': statColor }}
            class="stats"
            value={stat}
            max={calculateMaxOtherStats(stat)}
          />
          <h5 className="baseStatLabel">
            {calculateMinOtherStats(stat)}
          </h5>
          <h5 className="baseStatLabel">
            {calculateMaxOtherStats(stat)}
          </h5>
        </div>
      ))}
    </div>
  );
};
