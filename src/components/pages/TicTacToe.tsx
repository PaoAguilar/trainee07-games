/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useTicTacToeState } from '../../hooks/useTicTacToeState';

import Board from '../Board';
import TimeMachineImg from '../../images/timemachine.png';
import HomeImg from '../../images/home.png';
import '../../styles/timeMachine.scss';
import '../../styles/ticTacToe.scss';

const TicTacToe = (): JSX.Element => {
  const {
    gameState,
    current,
    xIsNext,
    moveThroughSteps,
    winner,
    handleClick,
    stepForButton,
  } = useTicTacToeState();

  const step = useRef<number>(0);
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
              src={TimeMachineImg}
              alt="tictactoc"
              onClick={() => {
                historyPath.push('/timeMachine');
              }}
            />
          </div>
          <span className="tooltiptext">Go to Time Machine</span>
        </div>
      </div>
      <h1 className="tittle">TIC TAC TOE</h1>
      <div className="tictactoe">
        <div className="tictactoe__indications">
          <h1>Indications:</h1>
          <ol>
            <li>
              <h2>
                A record of the movements will be kept until a winner is
                determined.
              </h2>
            </li>
            <li>
              <h2>
                You can move backwards and forwards on move&apos;s history using
                the previous and next buttons.
              </h2>
            </li>
            <li>
              <h2>
                You will be able to replay the game after a winner is
                determined, and will only be visible when game ends.
              </h2>
            </li>
            <li>
              <h2>You can restart a new game at any time.</h2>
            </li>
          </ol>
        </div>
        <div className="tictactoe__board">
          <div className="column">
            <Board board={current} onClick={handleClick} />
          </div>
        </div>

        <div className="tictactoe__buttons">
          <button
            type="button"
            className="tictactoe__button-style"
            disabled={stepForButton === 0}
            onClick={() => moveThroughSteps(stepForButton - 1)}
          >
            PREVIOUS
          </button>
          <button
            type="button"
            className="tictactoe__button-style"
            disabled={
              gameState.history.length === 0 ||
              stepForButton === gameState.history.length - 1
            }
            onClick={() => moveThroughSteps(stepForButton + 1)}
          >
            NEXT
          </button>
          {winner && (
            <button
              type="button"
              className="tictactoe__button-style"
              onClick={() => {
                const interval = setInterval(() => {
                  if (!(step.current === gameState.history.length)) {
                    moveThroughSteps(step.current);
                    step.current += 1;
                  } else {
                    clearInterval(interval);
                  }
                }, 500);
              }}
            >
              REPLAY
            </button>
          )}
          <div className="tictactoe__winner">
            <div>
              <h1>
                {winner
                  ? `Winner: ${winner}`
                  : `Next Player: ${xIsNext ? 'X' : 'O'}`}
              </h1>
            </div>
            <button
              type="button"
              className="tictactoe__button-style"
              onClick={() => {
                window.location.reload();
              }}
            >
              RESTART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
