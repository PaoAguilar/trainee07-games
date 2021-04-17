import React from 'react';
import { useTicTacToeState } from '../../hooks/useTicTacToeState';

import Board from '../Board';
import Log from '../Log';
import '../../styles/ticTacToe.scss';

const TicTacToe = (): JSX.Element => {
  const {
    gameState,
    current,
    xIsNext,
    jumpTo,
    winner,
    handleClick,
  } = useTicTacToeState();

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
        <Log />
      </div>
    </div>
  );
};

export default TicTacToe;
