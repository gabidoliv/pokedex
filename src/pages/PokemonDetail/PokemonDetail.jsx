import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { getPokemonColorByType, parseStats } from '../../helpers/pokemon';
import { PokemonAllStats } from '../../components/PokemonAllStats/PokemonAllStats';
import { PokemonDetailTabs } from '../../components/PokemonDetailTabs/PokemonDetailTabs';

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
  const color = pokemonSelected ? getPokemonColorByType(pokemonSelected.types) : null;

  return (
    <div>
      < PokemonDetailTabs label="About" pokemon={pokemonSelected} />
      < PokemonDetailTabs label="Stats" pokemon={pokemonSelected} stats={baseStats} color={color} />
      < PokemonDetailTabs label="Evolutions" pokemon={pokemonSelected} />
    </div>
  );
};
