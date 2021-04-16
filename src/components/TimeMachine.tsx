/* eslint-disable indent */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { colors } from '../config/constants';
import usePrevious from '../hooks/usePrevious';
import '../styles/timeMachine.scss';

const TimeMachine = (): any => {
  const [indexToChange, setIndexToChange] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [prevValue, getPrevValue] = usePrevious({
    history,
    activeIndex: indexToChange,
  });

  return (
    <div>
      <h1>
        Now:
        {getPrevValue(indexToChange)}
      </h1>
      <div className="single-wapper">
        <div
          style={{ backgroundColor: color[color.length - 1] }}
          className="single-box"
        />
      </div>
      <h1>
        Previuos:
        {prevValue}
      </h1>
      <div className="single-wapper">
        <div
          style={{ backgroundColor: color[color.length - 2] }}
          className="single-box"
        />
      </div>
      <br />
      <div className="time-machine__wrapper">
        {colors.map((value, index) => (
          <button
            style={{
              backgroundColor: value,
              opacity: getPrevValue(indexToChange) === index ? 1 : 0.2,
              border:
                getPrevValue(indexToChange) === index ? '1px solid red' : '',
            }}
            type="button"
            disabled={
              !(indexToChange === history.length - 1 || history.length === 0)
            }
            className="time-machine__box"
            key={index}
            onClick={() => {
              setColor([...color, value]);
              setHistory([...history, index]);
              setIndexToChange(history.length);
            }}
          >
            {index}
          </button>
        ))}

        <button
          type="button"
          disabled={
            history.length === 0 || indexToChange === history.length - 1
          }
          onClick={() => setIndexToChange(indexToChange + 1)}
        >
          NEXT
        </button>

        <button
          type="button"
          disabled={indexToChange === 0}
          onClick={() => {
            setIndexToChange(indexToChange - 1);
          }}
        >
          PREVIOUS
        </button>

        <button
          type="button"
          onClick={() => {
            setIndexToChange(history.length - 1);
            // setColor(color.length);
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
