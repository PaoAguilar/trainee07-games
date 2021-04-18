import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = (): any => {
  const history = useHistory();
  return (
    <div>
      <h1>CHOOSE YOUR GAME</h1>
      <button
        type="button"
        onClick={() => {
          history.push('/timeMachine');
        }}
      >
        Time Machine
      </button>
      <button
        type="button"
        onClick={() => {
          history.push('/ticTacToe');
        }}
      >
        Tic Tac Toe
      </button>
    </div>
  );
};

export default Home;
