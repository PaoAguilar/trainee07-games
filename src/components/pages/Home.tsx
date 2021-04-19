/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable global-require */
import React from 'react';
import { useHistory } from 'react-router-dom';
import TicTacToeImg from '../../images/tictactoe.png';
import TimeMachineImg from '../../images/timemachine.png';

import '../../styles/home.scss';

const Home = (): JSX.Element => {
  const history = useHistory();
  return (
    <div>
      <h1 className="tittle">CHOOSE YOUR GAME</h1>
      <div className="home">
        <div className="home__select-game">
          <img
            src={TicTacToeImg}
            alt="tictactoe"
            onClick={() => {
              history.push('/ticTacToe');
            }}
          />
          <h2
            onClick={() => {
              history.push('/ticTacToe');
            }}
          >
            Tic Tac Toe
          </h2>
        </div>
        <div className="home__select-game">
          <img
            src={TimeMachineImg}
            alt="timemachine"
            onClick={() => {
              history.push('/timeMachine');
            }}
          />
          <h2
            onClick={() => {
              history.push('/timeMachine');
            }}
          >
            Time Machine
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
