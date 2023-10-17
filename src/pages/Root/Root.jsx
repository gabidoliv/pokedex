import { useEffect, useState } from "react";
import "./Root.css";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";

function Root() {
  // O estado pokemonList é nosso source of truth dos pokemon
  // Então quando o usuario deletar o filtro, o setFilteredPokemonList se baseará neste source of truth (pokemonList) para retornar a lista ao estado inicial
  const [pokemonList, setPokemonList] = useState();

  // O estado filteredPokemonList armazena os pokemon que contemplam o filtro atual do usuário. Caso não tenha filtro, este estado armazena todos os pokemon da source of truth
  // Então quando o usuário digitar algum filtro, este estado vai ser atualizado
  const [filteredPokemonList, setFilteredPokemonList] = useState();

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

    // Atualiza os estados dos pokemon
    // Inicia o estado pokemonList com todos os pokemon que foram retornados pelo request `fetch(pokemon.url);`
    setPokemonList(pokemonDetailedList);

    // Inicia o estado filteredPokemonList com todos os pokemon que foram retornados pelo request `fetch(pokemon.url);`
    setFilteredPokemonList(pokemonDetailedList);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleChange = (event) => {
    const newValue = event.target.value;

    // Quando não existe filtro (new value vazio), o estado filteredPokemonList tem que retornar a lista ao estado inicial (source of truth: pokemonList)
    if (!newValue) {
      setFilteredPokemonList(pokemonList);
      return;
    }
    // O result recebe o array filtrado com os pokemon que correspondem ao que o usuario digitou no filtro
    const result = pokemonList.filter((pokemon) =>
      pokemon.name.includes(newValue)
    );

    // Atualiza o estado para re-renderizar a tela e ver a lista dos pokemon com o filtro aplicado em tempo real
    setFilteredPokemonList(result);
  };

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <h3>Search for Pokémon by name.</h3>
      <Input
        placeholder="What Pokémon are you looking for?"
        onChange={handleChange}
      />
      {filteredPokemonList?.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Root;
