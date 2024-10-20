/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { XIcon, SearchIcon } from '@heroicons/react/solid';
import SearchResult from './SearchResult';
import { StockContext } from '../contexts/StockContextProvider';
import { fetchStockData, getStockSymbolDetail } from '../../stock-api';

const Search = () => {
  const { setStockSymbol, setStockInfo } = useContext(StockContext);
  const [query, setQuery] = useState('');
  const [autoSuggestion, setAutoSuggestion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearInput = () => {
    setQuery('');
    setAutoSuggestion('');
  };

  const onSubmitHandler = async () => {
    setLoading(true);
    setStockSymbol(query);
    const data = await getStockSymbolDetail(query);
    setStockInfo(data);
    setLoading(false);
  };

  const getSuggestion = async (query) => {
    setLoading(true);
    try {
      let res;
      if (query) {
        res = await fetchStockData(query);
        console.log(res);
        setAutoSuggestion(res);
      }
    } catch (e) {
      setError('Failed To Get Any Data');
      setAutoSuggestion([]);
    } finally {
      setLoading(false);
    }
  };

  const debounce = function (cb, wait) {
    let timer = null;
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (timer) {
          cb.apply(context, args);
        }
      }, wait);
    };
  };

  const getDebounceCall = useCallback(
    debounce((query) => getSuggestion(query), 500),
    []
  );

  useEffect(() => {
    if (query.length > 1) {
      getDebounceCall(query);
    }
  }, [query, getDebounceCall]);

  return (
    <div className='flex flex-col'>
      <h3 className='text-4xl font-normal font-Inter'>
        Search for the Stocks...
      </h3>
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
        {query && query.length > 0 ? (
          <SearchResult results={autoSuggestion} onClick={onSubmitHandler} />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
