import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TimeMachine from './components/pages/TimeMachine';
import Home from './components/pages/Home';
import TicTacToe from './components/pages/TicTacToe';

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/timeMachine">
          <TimeMachine />
        </Route>
        <Route exact path="/ticTacToe">
          <TicTacToe />
        </Route>
      </Router>
    </div>
  );
}

export default App;
