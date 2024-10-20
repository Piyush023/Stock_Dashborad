import React, { useContext } from 'react';
import { StockContext } from '../contexts/StockContextProvider';
import Chart from 'react-apexcharts';

const Analysis = () => {
  const { stockInfo } = useContext(StockContext);
  console.log(stockInfo.analystView);

  const series = stockInfo.analystView.map((item) =>
    parseInt(item.numberOfAnalystsLatest)
  );
  const labels = stockInfo.analystView.map((item) => item.ratingName);
  const chartOptions = {
    chart: {
      type: 'pie',
    },
    labels: labels,
    colors: stockInfo.analystView.map((item) => item.colorCode || '#ccc'), // Default color if colorCode is empty
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div>
      <h1>Analysis</h1>

      <div>
        <Chart options={chartOptions} series={series} type='pie' width='400' />
      </div>
    </div>
  );
};

export default Analysis;
