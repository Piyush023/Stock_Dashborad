import React from 'react';

const EmptyView = ({ isLoading = false }) => {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-gray-50'>
      <div className='flex flex-col items-center'>
        <div className='flex items-center justify-center mb-4'>
          {/* Loader (Spinner) */}
          <svg
            className='w-10 h-10 text-blue-600 animate-spin'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              fill='none'
              strokeWidth='4'
              stroke='currentColor'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z'
            />
          </svg>
        </div>
        {isLoading && (
          <h2 className='text-lg text-gray-700'>Searching for stock data...</h2>
        )}
        {!isLoading && (
          <p className='text-gray-500'>
            Please enter a stock symbol to get started.
          </p>
        )}
      </div>
    </div>
  );
};

export default EmptyView;
