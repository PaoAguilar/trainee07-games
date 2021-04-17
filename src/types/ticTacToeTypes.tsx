/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const createBoardState = () => Array<Value>(9).fill(null);
export type Value = 'X' | 'O' | null;

export type BoardState = Value[];
export type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};
export type GameState = {
  history: BoardState[];
  step: number;
};
export type SquareProps = {
  value: Value;
  onClick: () => void;
};

export const calculateWinner = (boardState: BoardState) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
  }
  return null;
};
