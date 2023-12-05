import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import {
  calculateMaxHp,
  calculateMinHp,
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
  console.log(baseStats);

  return (
    <div>
      {pokemonSelected && <Card pokemon={pokemonSelected} />}
      <h3>Base Stats</h3>
      <h5>HP</h5>
      <h5>{baseStats.hp}</h5>
      <h5>{calculateMinHp(baseStats.hp)}</h5>
      <h5>{calculateMaxHp(baseStats.hp)}</h5>
      <h5>Attack</h5>
      <h5>{baseStats.attack}</h5>
      <h5>Defence</h5>
      <h5>{baseStats.defence}</h5>
      <h5>Sp. Attack</h5>
      <h5>{baseStats.specialAttack}</h5>
      <h5>Sp. Defence</h5>
      <h5>{baseStats.specialDefence}</h5>
      <h5>Speed</h5>
      <h5>{baseStats.speed}</h5>
      <h5>Total</h5>
    </div>
  );
};
