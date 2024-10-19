import React, { useState } from 'react';
import Summary from './Summary';
import Chart from './Chart';
import Stats from './Stats';
import Analysis from './Analysis';
import Settings from './Settings';

const Tabs = () => {
  const tabsData = [
    { id: 0, title: 'Summary', content: <Summary /> },
    { id: 1, title: 'Chart', content: <Chart /> },
    { id: 2, title: 'Statistics', content: <Stats /> },
    { id: 3, title: 'Analysis', content: <Analysis /> },
    { id: 4, title: 'Settings', content: <Settings /> },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className='flex w-full bg-white'>
      {tabsData.map((item, index) => {
        return (
          <div key={item.id} className='px-2' onClick={() => setActive(index)}>
            {item.title}
            {active === index && (
              <div className='w-auto h-1 bg-indigo-500 rounded-xl' />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
