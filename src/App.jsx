import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import StockContextProvider from './Components/contexts/StockContextProvider';

const App = () => {
  return (
    <StockContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StockContextProvider>
  );
};

export default App;
