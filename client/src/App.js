import React, { useContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Context from './context';
import reducer from './reducer';
import Home from './components/Home';
import MyLearning from './components/MyLearning';


function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({ state });

  return (
      <Router>
        <Context.Provider value={{ state, dispatch }}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/mylearning" component={MyLearning} />
            </Switch>
          </div>
        </Context.Provider>
      </Router>
  );
}

export default App;
