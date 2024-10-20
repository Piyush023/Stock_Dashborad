import React from 'react';

const Card = ({ children }) => {
  return (
    <div className={'w-full h-full rounded-md relative bg-white'}>
      {children}
    </div>
  );
};

export default Card;
