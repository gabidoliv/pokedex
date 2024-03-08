import { useState } from 'react';

export const Tabs = (props) => {
  const { tabItems } = props;

  const [selectedTab, setTab] = useState(0);

  const handleChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <div>
      <div>
        {tabItems.map((tab, index) => (
          <button onClick={() => handleChange(index)}>{tab.title}</button>
        ))}
      </div>
      {tabItems.map((tab, index) => selectedTab === index && tab.content)}
    </div>
  );
};
