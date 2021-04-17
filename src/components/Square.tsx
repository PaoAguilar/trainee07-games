/* eslint-disable arrow-body-style */
import React from 'react';
import '../styles/ticTacToe.scss';
import { SquareProps } from '../types/ticTacToeTypes';

const Square = ({ value, onClick }: SquareProps): JSX.Element => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
