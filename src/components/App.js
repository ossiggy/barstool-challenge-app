import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import ScoreBoard from './scoreboard/ScoreBoard';
import Header from './Header';

import '../styles/App.css';

function App() {
  return (
    <div id="app">
      <Header />
      <ScoreBoard url="http://localhost:8080/mlb/5db0a44e44112ab20743a531"/>
    </div>
  );
}

export default withRouter(App);
