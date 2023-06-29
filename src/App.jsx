import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";

function App() {
  const [pokemonList, setPokemonList] = useState();

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
    setPokemonList(pokemonDetailedList);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {pokemonList?.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default App;
