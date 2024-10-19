import React, { useState } from 'react';
import { mockSearchResults } from '../../constants';
import { XIcon, SearchIcon } from '@heroicons/react/solid';
import SearchResult from './SearchResult';

const Search = () => {
  const [query, setQuery] = useState('');
  const [bestMatch, setBestMatch] = useState(mockSearchResults.result);

  const clearInput = () => {
    setQuery('');
    setBestMatch('');
  };

  const onSubmitHandler = () => {
    setBestMatch(mockSearchResults.result);
  };

  console.log(bestMatch, 'res');

  return (
    <div className='flex flex-col'>
      <h1 className='text-5xl font-Inter'>Search for the Indexes, Stocks...</h1>
      <div className='relative z-50 flex items-center my-4 bg-white border-2 rounded-md w-96 border-neutral-200'>
        <input
          type='text'
          value={query}
          className={'w-full px-2 py-3 focus:outline-none rounded-md'}
          placeholder={'Search Stock...'}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmitHandler();
            }
          }}
        />
        {query && (
          <button onClick={clearInput}>
            <XIcon className={'w-4 h-4 fill-gray-500 mr-3'} />
          </button>
        )}
        <button
          className={
            'h-8 w-8 rounded-md bg-indigo-500 flex justify-center items-center m-1 p-2 mr-2'
          }
          onClick={onSubmitHandler}
        >
          <SearchIcon className={'w-4 h-4 fill-gray-100'} />
        </button>
        {query && bestMatch.length > 0 ? (
          <SearchResult results={bestMatch} />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
