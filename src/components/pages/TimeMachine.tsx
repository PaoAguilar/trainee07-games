/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { colors } from '../../config/constants';
import useTimeMachine from '../../hooks/useTimeMachine';
import TicTacToeImg from '../../images/tictactoe.png';
import HomeImg from '../../images/home.png';
import '../../styles/timeMachine.scss';

const TimeMachine = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);
  const [prevValue, getPrevValue] = useTimeMachine({
    history,
    activeIndex,
  });
  const historyPath = useHistory();

  return (
    <div>
      <div className="move-through-games">
        <div className="tooltip">
          <div className="move-through-games__logos">
            <img
              src={HomeImg}
              alt=""
              onClick={() => {
                historyPath.push('/');
              }}
            />
          </div>
          <span className="tooltiptext">Go to home</span>
        </div>
        <div className="tooltip">
          <div className="move-through-games__logos">
            <img
              src={TicTacToeImg}
              alt="tictactoc"
              onClick={() => {
                historyPath.push('/ticTacToe');
              }}
            />
          </div>
          <span className="tooltiptext">Go to Tic Tac Toe</span>
        </div>
      </div>
      <br />
      <h1 className="tittle">TIME MACHINE</h1>
      <div className="time-machine">
        <div className="time-machine__indications">
          <h1>Indications:</h1>
          <ol>
            <li>
              <h2>
                You can click on the color you want, the time machine will keep
                a track of the colors you clicked.
              </h2>
            </li>
            <li>
              <h2>
                You can use the previous button, which allows you to focus on
                the last selected color.
              </h2>
            </li>
            <li>
              <h2>
                You can use the next button, which allows you to focus on the
                next color you selected.
              </h2>
            </li>
            <li>
              <h2>
                The Resume button will bring the user back to where it left.
              </h2>
            </li>
          </ol>
          <h1>Have fun...</h1>
        </div>
        <div className="time-machine__wrapper">
          {colors.map((value, index) => (
            <button
              style={{
                backgroundColor: value,
                opacity: getPrevValue(activeIndex) === index ? 1 : 0.4,
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
        </div>

        <div className="time-machine__buttons">
          <button
            type="button"
            className="time-machine__button-style"
            disabled={
              history.length === 0 || activeIndex === history.length - 1
            }
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            NEXT
          </button>

          <button
            type="button"
            className="time-machine__button-style"
            disabled={activeIndex === 0}
            onClick={() => {
              setActiveIndex(activeIndex - 1);
            }}
          >
            PREVIOUS
          </button>

          <button
            type="button"
            className="time-machine__button-style"
            disabled={history.length === 0}
            onClick={() => {
              setActiveIndex(history.length - 1);
            }}
          >
            RESUME
          </button>
          <button
            type="button"
            className="time-machine__button-style"
            onClick={() => {
              setHistory([]);
            }}
          >
            RESET
          </button>
          <h1>
            Now:
            {getPrevValue(activeIndex)}
          </h1>
          <h1>
            Previous:
            {prevValue}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TimeMachine;
