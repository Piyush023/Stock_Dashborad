/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import Summary from './Summary';
import Analysis from './Analysis';
import ChartView from './ChartView';
import Stats from './Stats';

const Tabs = () => {
  const tabsData = [
    { id: 0, title: 'Summary', content: <Summary /> },
    { id: 1, title: 'Chart', content: <ChartView /> },
    { id: 2, title: 'Analysis', content: <Analysis /> },
    { id: 3, title: 'Statistics', content: <Stats /> },
  ];

  const [active, setActive] = useState(0);

  const renderTabComponent = useCallback(() => {
    return (
      <div className='flex w-full h-full py-5'>{tabsData[active].content}</div>
    );
  });

  return (
    <>
      <div className='flex w-full bg-white'>
        {tabsData.map((item, index) => {
          return (
            <div key={item.id} onClick={() => setActive(index)}>
              <div className='px-5 font-light opacity-50 font-Inter'>
                {item.title}
              </div>
              {active === index && (
                <div className='w-auto h-1 bg-indigo-500 rounded-xl' />
              )}
            </div>
          );
        })}
      </div>
      {renderTabComponent()}
    </>
  );
};

export default Tabs;
