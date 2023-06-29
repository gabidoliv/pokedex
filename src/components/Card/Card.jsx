import { useState } from "react";

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

export const Card = (props) => {
  const { pokemon } = props;

  const [counter, setCounter] = useState(0);

  // It will show only the color related to the first type
  const [firstType] = pokemon.types;
  const typeName = firstType.type.name;

  return (
    <div style={{ backgroundColor: colorPerType[typeName] }}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
      />
      <button onClick={() => setCounter((old) => old + 1)}>
        numero: {counter}
      </button>
      <h2>{pokemon.name}</h2>
      {pokemon.types.map(({ type }) => (
        <h3>{type.name}</h3>
      ))}
    </div>
  );
};