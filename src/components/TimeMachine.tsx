/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import usePrevious from '../hooks/usePrevious';
import '../styles/timeMachine.scss';

const TimeMachine = (): any => {
  console.log('renderizando');

  const [index, setIndex] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);
  const [length, getPrevValue] = usePrevious(history);
  //   const prevValue = usePrevious(index);
  console.log({ length });
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div>
      <h1>
        Now:
        {getPrevValue(index)}
      </h1>
      <h1>
        before:
        {getPrevValue(index - 1)}
      </h1>
      <button type="button" onClick={() => setIndex(index - 1)}>
        Previous
      </button>
      <button type="button" onClick={() => setIndex(index + 1)}>
        Next
      </button>
      <button type="button" onClick={() => setIndex(length - 1)}>
        Resume
      </button>

      <div className="time-machine__wrapper">
        {elements.map((value, index) => (
          <div
            className="time-machine__box"
            key={index}
            onClick={() => {
              console.log('click');
              history.push(index);
              console.log({ ...history });
              setHistory([...history]);
              setIndex(history.length - 1);
            }}
          >
            {value}
          </div>
        ))}
        <button type="button">NEXT</button>
        <button type="button">PREVIOUS</button>
        <button type="button">RESUME</button>
      </div>
    </div>
  );
};

export default TimeMachine;
