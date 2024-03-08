import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { getPokemonColorByType, parseStats } from '../../helpers/pokemon';
import { PokemonAllStats } from '../../components/PokemonAllStats/PokemonAllStats';
import { Tabs } from '../../components/Tabs/Tabs';

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

  return (
    <div>
      <Card pokemon={pokemonSelected} />

      <Tabs
        tabItems={[
          {
            title: 'About',
            content: <h1>About</h1>,
          },
          {
            title: 'Stats',
            content: <PokemonAllStats pokemon={pokemonSelected} />,
          },
          {
            title: 'Evolution',
            content: <h1>Evolution</h1>,
          },
        ]}
      />
    </div>
  );
};
