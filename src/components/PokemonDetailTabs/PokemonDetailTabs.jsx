import { useState } from 'react';
import { Card } from '../Card/Card';
import { PokemonAllStats } from '../PokemonAllStats/PokemonAllStats';

export const PokemonDetailTabs = (props) => {
  const { label, stats, color, pokemon } = props;

  const [tab, setTab] = useState();

  const handleChange = () => {
    switch (label) {
      case 'About':
        setTab(<Card pokemon={pokemon} />);
        break;
      case 'Stats':
        setTab(<PokemonAllStats stats={stats} color={color} />);
        break;
      case 'Evolutions':
        setTab(<Card pokemon={pokemon}/>);
        break;
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={handleChange}>{label}</button>
      {tab}
    </div>
  );
};
