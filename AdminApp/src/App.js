import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Pages
import Home from './components/pages/home/home';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/home/login';
import Users from './components/pages/users/UsersComponent';
import Vipr from './components/pages/viprpit/Vipr-Pit';
import Logout from './components/pages/home/logout';

//Components
import TeamUsersComponent from './components/pages/users/TeamUsersComponent';
import ModeQueue from './components/pages/viprpit/ModeQueue';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/TeamUsers" component={TeamUsersComponent} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/modequeue" component={ModeQueue} />
          <Route exact path="/vipr" component={Vipr} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}