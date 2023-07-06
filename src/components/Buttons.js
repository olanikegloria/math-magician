import React from 'react';

function Buttons({ backgroundColor, symbol, handleClick }) {
  const specialBtn = `span-2 ${backgroundColor}`;
  const ordinaryBtn = ` ${backgroundColor}`;

  return (
    <>
      {symbol === 0 ? (<button type="button" className={specialBtn} onClick={handleClick}>{ symbol}</button>)
        : <button type="button" className={ordinaryBtn} onClick={handleClick}>{symbol }</button>}
    </>

  );
}

export default Buttons;
