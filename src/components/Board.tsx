/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import React from 'react';

import { BoardProps, SquareProps } from '../types/ticTacToeTypes';
import Square from './Square';

const Board = ({ board, onClick }: BoardProps): JSX.Element => {
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };
  return (
    <div className="column__board">
      <div className="row__board">
        <Square {...createProps(0)} />
        <Square {...createProps(1)} />
        <Square {...createProps(2)} />
      </div>
      <div className="row__board">
        <Square {...createProps(3)} />
        <Square {...createProps(4)} />
        <Square {...createProps(5)} />
      </div>
      <div className="row__board">
        <Square {...createProps(6)} />
        <Square {...createProps(7)} />
        <Square {...createProps(8)} />
      </div>
    </div>
  );
};

export default Board;
