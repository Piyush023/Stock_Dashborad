import React from 'react';

const ChartFilter = ({ filter, active, onClick }) => {
  return (
    <button
      className={`flex justify-center items-center w-10 h-8 m-2 rounded-md cursor-pointer border-1 ${
        active
          ? 'bg-indigo-600 border-indigo-700 text-gray-100'
          : 'border-indigo-500 text-gray-500'
      } font-Inter font-medium`}
      onClick={onClick}
    >
      {filter}
    </button>
  );
};

export default ChartFilter;
