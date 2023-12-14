import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import {
  calculateMaxHp,
  calculateMaxOtherStats,
  calculateMinHp,
  calculateMinOtherStats,
  getPokemonColorByType,
  parseStats,
} from '../../helpers/pokemon';

export const PokemonDetail = (props) => {
  const params = useParams();

  const [pokemonSelected, setPokemonSelected] = useState();

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`
    );

    const pokemonDetailsPage = await response.json();
    setPokemonSelected(pokemonDetailsPage);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (!pokemonSelected) return <></>;

  const baseStats = parseStats(pokemonSelected.stats);

  const color = getPokemonColorByType(pokemonSelected.types);

  return (
    <div>
      {pokemonSelected && <Card pokemon={pokemonSelected} />}
      <h3>Base Stats</h3>

      <div>
        <h5 className="baseStatLabel">HP</h5>
        <h5 className="baseStatLabel">{baseStats.hp}</h5>
        <progress
          style={{ '--color': color }}
          class="stats"
          value={baseStats.hp}
          max={calculateMaxHp(baseStats.hp)}
        />
        <h5 className="baseStatLabel">{calculateMinHp(baseStats.hp)}</h5>
        <h5 className="baseStatLabel">{calculateMaxHp(baseStats.hp)}</h5>
      </div>

      <div>
        <h5 className="baseStatLabel">Attack</h5>
        <h5 className="baseStatLabel">{baseStats.attack}</h5>
        <progress
          style={{ '--color': color }}
          class="stats"
          value={baseStats.attack}
          max={calculateMaxOtherStats(baseStats.attack)}
        />
        <h5 className="baseStatLabel">
          {calculateMinOtherStats(baseStats.attack)}
        </h5>
        <h5 className="baseStatLabel">
          {calculateMaxOtherStats(baseStats.attack)}
        </h5>
      </div>

      <div>
        <h5 className="baseStatLabel">Defense</h5>
        <h5 className="baseStatLabel">{baseStats.defense}</h5>
        <progress
          style={{ '--color': color }}
          class="stats"
          value={baseStats.defense}
          max={calculateMaxOtherStats(baseStats.defense)}
        />
        <h5 className="baseStatLabel">
          {calculateMinOtherStats(baseStats.defense)}
        </h5>
        <h5 className="baseStatLabel">
          {calculateMaxOtherStats(baseStats.defense)}
        </h5>
      </div>

      <div>
        <h5 className="baseStatLabel">Sp. Attack</h5>
        <h5 className="baseStatLabel">{baseStats.specialAttack}</h5>
        <progress
          style={{ '--color': color }}
          class="stats"
          value={baseStats.specialAttack}
          max={calculateMaxOtherStats(baseStats.specialAttack)}
        />
        <h5 className="baseStatLabel">
          {calculateMinOtherStats(baseStats.specialAttack)}
        </h5>
        <h5 className="baseStatLabel">
          {calculateMaxOtherStats(baseStats.specialAttack)}
        </h5>
      </div>

      <div>
        <h5 className="baseStatLabel">Sp. Defense</h5>
        <h5 className="baseStatLabel">{baseStats.specialDefense}</h5>
        <progress
          style={{ '--color': color }}
          class="stats"
          value={baseStats.specialDefense}
          max={calculateMaxOtherStats(baseStats.specialDefense)}
        />
        <h5 className="baseStatLabel">
          {calculateMinOtherStats(baseStats.specialDefense)}
        </h5>
        <h5 className="baseStatLabel">
          {calculateMaxOtherStats(baseStats.specialDefense)}
        </h5>
      </div>

      <div>
        <h5 className="baseStatLabel">Speed</h5>
        <h5 className="baseStatLabel">{baseStats.speed}</h5>
        <progress
          style={{ '--color': color }}
          class="stats"
          value={baseStats.speed}
          max={calculateMaxOtherStats(baseStats.speed)}
        />
        <h5 className="baseStatLabel">
          {calculateMinOtherStats(baseStats.speed)}
        </h5>
        <h5 className="baseStatLabel">
          {calculateMaxOtherStats(baseStats.speed)}
        </h5>
      </div>

      <h5 className="baseStatLabel">Total</h5>
    </div>
  );
};
