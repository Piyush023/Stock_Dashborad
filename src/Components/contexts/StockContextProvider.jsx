import { createContext, useMemo, useState } from 'react';

export const StockContext = createContext({
  stockInfo: {},
  setStockInfo: () => {},
  stockSymbol: '',
  setStockSymbol: () => {},
});

const StockContextProvider = ({ children }) => {
  const [stockInfo, setStockInfo] = useState({});
  const [stockSymbol, setStockSymbol] = useState('');

  const value = useMemo(
    () => ({
      stockInfo,
      setStockInfo,
      stockSymbol,
      setStockSymbol,
    }),
    [stockInfo, setStockInfo, stockSymbol, setStockSymbol]
  );

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
};

export default StockContextProvider;
