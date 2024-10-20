import React, { useContext } from 'react';
import { StockContext } from '../contexts/StockContextProvider';

const Header = () => {
  const { stockInfo } = useContext(StockContext);

  const negativeChange = (value) => {
    if (value >= 0) {
      return false;
    } else if (value < 0) {
      return true;
    }
  };

  return (
    <div className='flex flex-col items-start justify-start w-full h-auto px-4 pb-5 bg-white'>
      <div className='flex flex-col w-full h-full'>
        <div className='text-3xl font-semibold font-Inter'>
          {stockInfo?.companyName}
        </div>
        <div className='relative'>
          <div>
            <h1 className='text-xl font-semibold font-Inter'>
              Last Price - {stockInfo?.stockDetailsReusableData?.price}
            </h1>
          </div>
          <div className='absolute bottom-0 left-48'>
            <h1 className='text-base font-light font-Inter'>(INR)</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-row'>
        <div
          className={`${
            negativeChange(stockInfo?.stockDetailsReusableData?.percentChange)
              ? 'text-red-500'
              : 'text-green-500'
          } font-Inter`}
        >
          {negativeChange(stockInfo?.stockDetailsReusableData?.percentChange)
            ? '-'
            : '+'}
          {Math?.abs(
            stockInfo?.stockDetailsReusableData?.close -
              stockInfo?.stockDetailsReusableData?.price
          )?.toFixed(2)}
        </div>
        <div
          className={`${
            negativeChange(stockInfo?.stockDetailsReusableData?.percentChange)
              ? 'text-red-500'
              : 'text-green-500'
          } font-Inter`}
        >
          ({stockInfo?.stockDetailsReusableData?.percentChange})
        </div>
      </div>
    </div>
  );
};

export default Header;
