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
  console.log('renderizando');

  const [valueToChange, setValueToChange] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [opacity, setOpaticy] = useState<number>(0.5);
  const [length, getPrevValue] = usePrevious(history);
  //   const prevValue = usePrevious(valueToChange);
  console.log({ color });
  console.log({ length });

  return (
    <div>
      <h1>
        Now:
        {getPrevValue(valueToChange)}
      </h1>
      <div className="single-wapper">
        <div
          style={{ backgroundColor: color[color.length - 1] }}
          className="single-box"
        />
      </div>
      <h1>
        Previuos:
        {getPrevValue(valueToChange - 1)}
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
          <div
            style={{ backgroundColor: value, opacity }}
            className="time-machine__box"
            key={index}
            onClick={() => {
              console.log('click');
              console.log({ value });
              history.push(index);
              color.push(value);
              console.log({ ...history });
              setOpaticy(1);
              setColor([...color]);
              setHistory([...history]);
              setValueToChange(history.length - 1);
            }}
          >
            {/* {value} */}
          </div>
        ))}

        {/* <button
          type="button"
          onClick={() => setValueToChange(valueToChange + 1)}
        >
          NEXT
        </button> */}

        {history.length === 0 ? (
          <button disabled type="button">
            NEXT
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setValueToChange(valueToChange + 1)}
          >
            NEXT
          </button>
        )}

        {history[valueToChange] === undefined ? (
          <button disabled type="button">
            PREVIOUS
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setValueToChange(valueToChange - 1)}
          >
            PREVIOUS
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            setValueToChange(length - 1);
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
