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
      <h1>Pokédex</h1>
      <h3>Search for Pokémon by name.</h3>
      <input
        style={{
          width: "100%",
          border: "none",
          backgroundColor: "#F2F2F2",
          borderRadius: 24,
          padding: "16px 0px",
          marginBottom: 32,
        }}
        type="text"
        name="input"
        placeholder="What Pokémon are you looking for?"
        onChange={(event) => {
          const newValue = event.target.value;
          console.log(newValue);
        }}
      />
      {pokemonList?.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default App;
