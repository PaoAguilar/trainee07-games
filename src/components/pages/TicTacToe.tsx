/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef } from 'react';
import { useTicTacToeState } from '../../hooks/useTicTacToeState';

import Board from '../Board';
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
  // console.log(gameState.history);

  return (
    <div>
      <h1>TIC TAC TOE</h1>
      <div className="row">
        <div className="column">
          <div>
            {winner ? `Winner ${winner}` : `Next Player ${xIsNext ? 'X' : 'O'}`}
          </div>
          <Board board={current} onClick={handleClick} />
        </div>
        <button
          type="button"
          disabled={stepForButton === 0}
          onClick={() => moveThroughSteps(stepForButton - 1)}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={
            gameState.history.length === 0 ||
            stepForButton === gameState.history.length - 1
          }
          onClick={() => moveThroughSteps(stepForButton + 1)}
        >
          Next
        </button>
        {winner && (
          <button
            type="button"
            onClick={() => {
              const interval = setInterval(() => {
                if (!(step.current === gameState.history.length)) {
                  moveThroughSteps(step.current);
                  step.current += 1;
                  // console.log(step.current);
                } else {
                  clearInterval(interval);
                }
              }, 500);

              // console.log(gameState.history.length - 1);
            }}
          >
            Replay
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
