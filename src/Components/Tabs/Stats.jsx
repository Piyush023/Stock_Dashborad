import React, { useContext } from 'react';
import { StockContext } from '../contexts/StockContextProvider';

const StockDataTable = ({ stockData }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-collapse border-gray-200'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='px-4 py-2 text-left border border-gray-200'>
              Metric
            </th>
            <th className='px-4 py-2 text-left border border-gray-200'>
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(stockData)
            .filter(
              (item) =>
                !(item[0] === 'peerCompanyList' || item[0] === 'stockAnalyst')
            )
            .map(([key, value], index) => (
              <tr
                key={index}
                className={`bg-${index % 2 === 0 ? 'white' : 'gray-50'}`}
              >
                <td className='px-4 py-2 capitalize border border-gray-200'>
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </td>
                <td className='px-4 py-2 border border-gray-200'>{value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const Stats = () => {
  const { stockInfo } = useContext(StockContext);

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex my-3 text-3xl font-medium font-Inter text-neutral-800'>
        Last Price - {stockInfo?.currentPrice?.BSE}
      </div>
      <span className='flex text-2xl font-semibold font-Inter text-neutral-950'>
        Statistics Details -
      </span>
      <StockDataTable stockData={stockInfo?.stockDetailsReusableData} />
    </div>
  );
};

export default Stats;
