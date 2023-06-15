import { useEffect, useState } from "react";
import "./App.css";

const colorPerType = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#FA6C6C",
  water: "#6890F0",
  grass: "#48CFB2",
  electric: "#FFCE4B",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

function App() {
  const [pokemon, setPokemon] = useState();

  const fetchPokemon = async () => {
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setPokemon(data);
    // });
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151"); // Pega os dados de todos os pokemons
    const parsedResponse = await response.json(); // Transforma a resposta em json

    // Cria lista de promises que vai pegar os detalhes de cada um dos pokemons
    const promiseRequests = parsedResponse.results.map(async (pokemon) => {
      // Armazena a promise para fazer request do pokemon da iteracao atual
      const pokemonDetailResponse = await fetch(pokemon.url);
      const pokemonDetail = await pokemonDetailResponse.json();

      return pokemonDetail;
    });

    // Faz request de cada uma das promises e salva o resultado na variavel pokemonDetailedList
    const pokemonDetailedList = await Promise.all(promiseRequests);

    // Atualiza o estado dos pokemon
    setPokemon(pokemonDetailedList);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {pokemon?.map((pokemon) => {
        // It will show only the color related to the first type
        const [firstType] = pokemon.types;
        const typeName = firstType.type.name;
        return (
          <div style={{ backgroundColor: colorPerType[typeName] }}>
            <h2>{pokemon.name}</h2>
            {pokemon.types.map(({ type }) => (
              <h3>{type.name}</h3>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;
