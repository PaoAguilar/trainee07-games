import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TimeMachine from './components/TimeMachine';
import Home from './components/Home';

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
      </Router>
    </div>
  );
}

export default App;
