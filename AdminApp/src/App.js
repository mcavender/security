import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Pages
import Home from './components/pages/home/home';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/home/login';
import Users from './components/pages/users/UsersComponent';
import Vipr from './components/pages/viprpit/Vipr-Pit';

//Components
import TeamUsersComponent from './components/pages/users/TeamUsersComponent';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/TeamUsers" component={TeamUsersComponent} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/vipr" component={Vipr} />
          <Route exact path="/google" render={() => (window.location = "https://google.com")} />
          <Route exact path="/github" render={() => (window.location = "https://github.com/")} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}