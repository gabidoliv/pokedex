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
        <h5>HP</h5>
        <h5>{baseStats.hp}</h5>
        <progress
          style={{ '--color': color }}
          class="stats"
          value={baseStats.hp}
          max={calculateMaxHp(baseStats.hp)}
        />
        <h5>{calculateMinHp(baseStats.hp)}</h5>
        <h5>{calculateMaxHp(baseStats.hp)}</h5>
      </div>

      <h5>Attack</h5>
      <h5>{baseStats.attack}</h5>
      <progress
        style={{ '--color': color }}
        class="stats"
        value={baseStats.attack}
        max={calculateMaxOtherStats(baseStats.attack)}
      />
      <h5>{calculateMinOtherStats(baseStats.attack)}</h5>
      <h5>{calculateMaxOtherStats(baseStats.attack)}</h5>

      <h5>Defense</h5>
      <h5>{baseStats.defense}</h5>
      <progress
        style={{ '--color': color }}
        class="stats"
        value={baseStats.defense}
        max={calculateMaxOtherStats(baseStats.defense)}
      />
      <h5>{calculateMinOtherStats(baseStats.defense)}</h5>
      <h5>{calculateMaxOtherStats(baseStats.defense)}</h5>

      <h5>Sp. Attack</h5>
      <h5>{baseStats.specialAttack}</h5>
      <progress
        style={{ '--color': color }}
        class="stats"
        value={baseStats.specialAttack}
        max={calculateMaxOtherStats(baseStats.specialAttack)}
      />
      <h5>{calculateMinOtherStats(baseStats.specialAttack)}</h5>
      <h5>{calculateMaxOtherStats(baseStats.specialAttack)}</h5>

      <h5>Sp. Defense</h5>
      <h5>{baseStats.specialDefense}</h5>
      <progress
        style={{ '--color': color }}
        class="stats"
        value={baseStats.specialDefense}
        max={calculateMaxOtherStats(baseStats.specialDefense)}
      />
      <h5>{calculateMinOtherStats(baseStats.specialDefense)}</h5>
      <h5>{calculateMaxOtherStats(baseStats.specialDefense)}</h5>

      <h5>Speed</h5>
      <h5>{baseStats.speed}</h5>
      <progress
        style={{ '--color': color }}
        class="stats"
        value={baseStats.speed}
        max={calculateMaxOtherStats(baseStats.speed)}
      />
      <h5>{calculateMinOtherStats(baseStats.speed)}</h5>
      <h5>{calculateMaxOtherStats(baseStats.speed)}</h5>

      <h5>Total</h5>
    </div>
  );
};
