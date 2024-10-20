import React, { useContext } from 'react';
import { StockContext } from '../contexts/StockContextProvider';

const Summary = () => {
  const { stockInfo } = useContext(StockContext);

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-col w-full h-full'>
        <div>
          <div className='flex text-3xl font-semibold font-Inter text-neutral-950'>
            {stockInfo?.companyName}
          </div>
          <div className='flex my-3 text-2xl font-medium font-Inter text-neutral-800'>
            Last Price - {stockInfo?.currentPrice?.BSE}
          </div>
          <div className='flex my-3 font-medium text-1xl font-Inter text-neutral-700'>
            Industry - {stockInfo?.companyProfile?.mgIndustry}
          </div>
        </div>
        <div className='flex font-small font-Inter'>
          {stockInfo?.companyProfile?.companyDescription}
        </div>
      </div>
      <div>
        <span className='flex mt-5 text-3xl font-semibold font-Inter text-neutral-950'>
          Technical Details -
        </span>
        {stockInfo?.financials?.[0]?.stockFinancialMap?.INC?.map(
          (item, index) => {
            return (
              <table
                className='min-w-full border border-collapse border-gray-200'
                key={index}
              >
                <thead>
                  <tr className='bg-gray-100'>
                    <th className='px-4 py-2 text-left border border-gray-200'>
                      {item?.displayName}:
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`bg-${index % 2 === 0 ? 'white' : 'gray-50'}`}>
                    <td className='px-4 py-2 border border-gray-200'>
                      {item?.value}
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Summary;
