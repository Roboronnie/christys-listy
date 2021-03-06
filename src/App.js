import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Company from './Components/Company/Company';
import Student from './Components/Student/Student';
import Schedule from './Components/Schedule/Schedule';
import Home from './Components/Home/Home';
import CompanyRanking from './Components/CompanyRanking/CompanyRanking';
import StudentRanking from './Components/StudentRanking/StudentRanking';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/company" component={Company} />
            <Route path="/student" component={Student} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/home" component={Home} />
            <Route path="/company-ranking" component={CompanyRanking} />
            <Route path="/student-ranking" component={StudentRanking} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
