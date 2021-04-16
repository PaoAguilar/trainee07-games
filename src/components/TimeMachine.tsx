import React, { useState } from 'react';
import useTimeMachine from '../hooks/useTimeMachine';

import { colors } from '../config/constants';
import '../styles/timeMachine.scss';

const TimeMachine = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);
  const [prevValue, getPrevValue] = useTimeMachine({
    history,
    activeIndex,
  });

  return (
    <div>
      <h1>
        Now:
        {getPrevValue(activeIndex)}
      </h1>
      <h1>
        Previous:
        {prevValue}
      </h1>
      <br />
      <div className="time-machine__wrapper">
        {colors.map((value, index) => (
          <button
            style={{
              backgroundColor: value,
              opacity: getPrevValue(activeIndex) === index ? 1 : 0.2,
              border:
                getPrevValue(activeIndex) === index ? '1px solid red' : '',
            }}
            type="button"
            disabled={
              !(activeIndex === history.length - 1 || history.length === 0)
            }
            className="time-machine__box"
            key={value}
            onClick={() => {
              setHistory([...history, index]);
              setActiveIndex(history.length);
            }}
          >
            {index}
          </button>
        ))}

        <button
          type="button"
          disabled={history.length === 0 || activeIndex === history.length - 1}
          onClick={() => setActiveIndex(activeIndex + 1)}
        >
          NEXT
        </button>

        <button
          type="button"
          disabled={activeIndex === 0}
          onClick={() => {
            setActiveIndex(activeIndex - 1);
          }}
        >
          PREVIOUS
        </button>

        <button
          type="button"
          disabled={history.length === 0}
          onClick={() => {
            setActiveIndex(history.length - 1);
          }}
        >
          RESUME
        </button>
        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default TimeMachine;
