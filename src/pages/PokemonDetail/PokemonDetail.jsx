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
import { PokemonStatInfo } from '../../components/PokemonStatInfo/PokemonStatInfo';

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

      <PokemonStatInfo stats={baseStats} color={color}/>

      <h5 className="baseStatLabel">Total</h5>
    </div>
  );
};
