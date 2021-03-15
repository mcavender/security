import React, { Component, useState } from 'react';
import { useSpring, animated } from "react-spring";
import axios from 'axios';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import NotFound from './components/NotFound'

//Components
import TeamUsersComponent from './components/TeamUsersComponent';
import CustomTable from './components/custom-table.js';

const appUrl = 'http://localhost:8080/user';
class App extends Component {

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.username,
      password: this.password
    }

    axios.post('http://localhost:3000/login', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={ Home }/>
          <Route exact path="/TeamUsers" component={TeamUsersComponent} />
          <Route exact path="/users" component={<CustomTable dataUrl={appUrl} />} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

function Home() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label htmlFor="username">USERNAME</label>
      <input type="text" id="username" />
      <label htmlFor="password">PASSWORD</label>
      <input type="text" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
      <label htmlFor="fullname">full name</label>
      <input type="text" id="fullname" />
      <label htmlFor="email">email</label>
      <input type="text" id="email" />
      <label htmlFor="password">password</label>
      <input type="text" id="password" />
      <label htmlFor="confirmpassword">confirm password</label>
      <input type="text" id="confirmpassword" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

export default App;
