import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const PokemonDetail = (props) => {
  const params = useParams();

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`
    );
    const parsedResponse = await response.json();
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return <h1>Hello World</h1>;
};
