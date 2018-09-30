import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Company from './Components/Company/Company';
import Student from './Components/Student/Student';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
          <Switch>
            <Redirect exact from="/" to="/company" />
            <Route path="/company" component={Company} />
            <Route path="/student" component={Student} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
