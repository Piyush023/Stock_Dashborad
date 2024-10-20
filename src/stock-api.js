export const getStockSymbolDetail = async (stockSymbol) => {
  const data = await fetch(
    `https://indian-stock-exchange-api2.p.rapidapi.com/stock?name=${stockSymbol}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'indian-stock-exchange-api2.p.rapidapi.com',
      },
    }
  );

  if (!data.ok) {
    throw new Error('API ERROR');
  }
  return await data.json();
};

export const fetchStockData = async (query) => {
  try {
    const response = await fetch(
      `https://indian-stock-exchange-api2.p.rapidapi.com/industry_search?query=${query}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY, // Use the API key from the .env file
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getChartData = async (stockSymbol, period) => {
  const data = await fetch(
    `https://indian-stock-exchange-api2.p.rapidapi.com/historical_data?stock_name=${stockSymbol}&period=${period}&filter=price`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'indian-stock-exchange-api2.p.rapidapi.com',
      },
    }
  );
  if (!data.ok) {
    throw new Error('API ERROR');
  }
  return await data.json();
};
