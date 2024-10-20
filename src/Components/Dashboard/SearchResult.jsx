import React from 'react';

const SearchResult = ({ results, onClick }) => {
  if (results) {
    return (
      <ul>
        {results?.map((item) => {
          return (
            <li
              onClick={onClick}
              key={item.id}
              className='flex items-center justify-between p-4 m-2 rounded-md cursor-pointer hover:bg-indigo-200 border-1'
            >
              <div className='flex flex-col items-start justify-between'>
                <span>{item.commonName}</span>
                <span>{item.mgIndustry}</span>
              </div>
              <span>{item.nseRic}</span>
            </li>
          );
        })}
      </ul>
    );
  }
  return null;
};

export default SearchResult;
