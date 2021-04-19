/* eslint-disable arrow-body-style */
import React from 'react';

import { SquareProps } from '../types/ticTacToeTypes';
import '../styles/ticTacToe.scss';

const Square = ({ value, onClick }: SquareProps): JSX.Element => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
