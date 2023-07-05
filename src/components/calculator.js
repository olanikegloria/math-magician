import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';
import './calculator.css';

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next, operation } = result;

  const handleClick = (e) => {
    const input = e.target.innerHTML;
    setResult(calculate(result, input));
  };
  const data = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <div className="container">
      <div className="input-container">{ next || operation || total || 0 }</div>
      {data.map((element) => (
        element === '÷' || element === 'x' || element === '-' || element === '=' || element === '+'
          ? (
            <Buttons
              className="btn"
              key={element}
              backgroundColor="orange"
              symbol={element}
              handleClick={handleClick}
            />
          )
          : (
            <Buttons
              className="btn"
              key={element}
              backgroundColor="gray"
              symbol={element}
              handleClick={handleClick}
            />
          )
      ))}
    </div>
  );
}

export default Calculator;
