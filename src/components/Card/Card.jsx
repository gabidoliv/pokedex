import { POKEMON_COLOR_PER_TYPE } from "../../constants/pokemon";
import { getPokemonColorByType, parseIdIntoPokedexNumber } from "../../helpers/pokemon";
import { toCapitalLetter } from "../../helpers/string";
import { Tag } from "../Tag/Tag";

export const Card = (props) => {
  const { pokemon } = props;

  const color = getPokemonColorByType(pokemon.types);

  return (
    <div
      style={{
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        marginBottom: 16,
        borderRadius: 15,
      }}
    >
      <div>
        <h3>{parseIdIntoPokedexNumber(pokemon.id)}</h3>
        <h2>{toCapitalLetter(pokemon.name)}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {pokemon.types.map(({ type }) => (
            <Tag
              key={type.name}
              text={toCapitalLetter(type.name)}
              color={color}
            />
          ))}
        </div>
      </div>

      <img
        style={{ height: 256 }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
      />
    </div>
  );
};
