import React from 'react';
import Card from './Card';
import Search from './Search';
import Content from './Content';

const Dashboard = () => {
  return (
    <div
      className={
        'h-screen grid grid-cols-1 md:grid-cols-2 xl: gird-cols-3 grid-rows-6 md:gird-rows-5 xl:grid-rows-4 gap-8 auto-rows-fr p-10 font-Inter'
      }
    >
      <div className='flex items-center justify-start col-span-1 row-span-1 md:col-span-2 xl:col-span-3'>
        <Search />
      </div>
      <div className='row-span-6 md:col-span-4'>
        <Card>
          <Content />
        </Card>
      </div>
      {/* <div className='row-span-3 xl:row-span-1'>
        <Card>Graph</Card>
      </div>
      <div className='row-span-3 xl:row-span-3'>
        <Card>Detail</Card>
      </div> */}
    </div>
  );
};

export default Dashboard;
