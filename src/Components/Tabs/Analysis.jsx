import React, { useContext } from 'react';
import { StockContext } from '../contexts/StockContextProvider';
import Chart from 'react-apexcharts';

const Analysis = () => {
  const { stockInfo } = useContext(StockContext);

  const series = stockInfo?.analystView?.map((item) =>
    parseInt(item?.numberOfAnalystsLatest)
  );
  const labels = stockInfo?.analystView?.map((item) => item.ratingName);

  const chartOptions = {
    chart: {
      type: 'pie',
    },
    labels: labels,
    colors: stockInfo?.analystView?.map((item) => item?.colorCode || '#ccc'),
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
      <h1 className='mb-4 text-2xl font-bold'>Analyst Ratings</h1>
      <div>
        <Chart options={chartOptions} series={series} type='pie' width='400' />
        <div>
          {stockInfo?.analystView?.map((item, index) => {
            return (
              <div>
                <table className='min-w-full border border-collapse border-gray-200'>
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className='px-4 py-2 text-left border border-gray-200'>
                        Rating
                      </th>
                      <th className='px-4 py-2 text-left border border-gray-200'>
                        Number of Analysts (Latest)
                      </th>
                      <th className='px-4 py-2 text-left border border-gray-200'>
                        Number of Analysts (1 Week Ago)
                      </th>
                      <th className='px-4 py-2 text-left border border-gray-200'>
                        Number of Analysts (1 Month Ago)
                      </th>
                      <th className='px-4 py-2 text-left border border-gray-200'>
                        Number of Analysts (2 Months Ago)
                      </th>
                      <th className='px-4 py-2 text-left border border-gray-200'>
                        Number of Analysts (3 Months Ago)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      key={item?.ratingValue}
                      style={{ backgroundColor: item?.colorCode || 'white' }}
                    >
                      <td className='px-4 py-2 border border-gray-200'>
                        {item?.ratingName}
                      </td>
                      <td className='px-4 py-2 border border-gray-200'>
                        {item?.numberOfAnalystsLatest}
                      </td>
                      <td className='px-4 py-2 border border-gray-200'>
                        {item?.numberOfAnalysts1WeekAgo}
                      </td>
                      <td className='px-4 py-2 border border-gray-200'>
                        {item?.numberOfAnalysts1MonthAgo}
                      </td>
                      <td className='px-4 py-2 border border-gray-200'>
                        {item?.numberOfAnalysts2MonthAgo}
                      </td>
                      <td className='px-4 py-2 border border-gray-200'>
                        {item?.numberOfAnalysts3MonthAgo}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
