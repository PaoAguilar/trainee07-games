/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import {
  calculateWinner,
  GameState,
  createBoardState
} from '../types/ticTacToeTypes';

export const useTicTacToeState = () => {
  const [gameState, setGameState] = useState<GameState>({
    history: [createBoardState()],
    step: 0,
  });

  const current = gameState.history[gameState.step];
  const xIsNext = gameState.step % 2 === 0;
  const winner = calculateWinner(current);

  const handleClick = (square: number) => {
    const history = gameState.history.slice(0, gameState.step + 1);
    const boardState = history[history.length - 1];
    if (calculateWinner(boardState) || boardState[square]) {
      return;
    }
    const newBoardState = boardState.slice();
    newBoardState[square] = gameState.step % 2 === 0 ? 'X' : 'O';
    history.push(newBoardState);
    setGameState({
      history,
      step: history.length - 1,
    });
  };

  const jumpTo = (step: number) => {
    setGameState({
      history: gameState.history,
      step,
    });
  };

  return {
    gameState,
    current,
    xIsNext,
    winner,
    handleClick,
    jumpTo,
  };
};
