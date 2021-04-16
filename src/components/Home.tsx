/* eslint-disable arrow-body-style */
import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = (): any => {
  const history = useHistory();
  return (
    <div>
      <h1>Home</h1>
      <button
        type="button"
        onClick={() => {
          history.push('/timeMachine');
        }}
      >
        Time Machine
      </button>
    </div>
  );
};

export default Home;
