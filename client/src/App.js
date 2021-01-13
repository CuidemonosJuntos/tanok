import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import MyLearning from './components/MyLearning';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mylearning" component={MyLearning} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
