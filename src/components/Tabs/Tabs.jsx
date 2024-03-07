import { useState } from 'react';
import { Card } from '../Card/Card';
import { PokemonAllStats } from '../PokemonAllStats/PokemonAllStats';

export const Tabs = (props) => {
  const { foo } = props;

  const [selectedTab, setTab] = useState();

  const handleChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <div>
      {foo.map((tab, index) => (
        <div>
          <button onClick={() => handleChange(index)}>{foo.title}</button>

          {selectedTab===index && tab.content}
        </div>
      ))}
    </div>
  );
};
