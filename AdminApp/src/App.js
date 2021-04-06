import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Pages
import Home from './components/pages/home';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/login';
import TestTable from './components/pages/TestTable3Page';

//Components
import TeamUsersComponent from './components/TeamUsersComponent';
import CustomTable from './components/UsersComponent';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/TeamUsers" component={TeamUsersComponent} />
          <Route exact path="/TestTable" component={TestTable} />
          <Route exact path="/users" component={CustomTable} />
          <Route exact path="/google" render={() => (window.location = "https://google.com")} />
          <Route exact path="/github" render={() => (window.location = "https://github.com/")} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}