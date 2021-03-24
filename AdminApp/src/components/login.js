import React from 'react';

import UsersService from '../services/UsersService';
import Popup from './Popup';

export default class Login extends React.Component {

  state = {
    disabled: true
  }
  
    
  handleSubmit = e => {
    e.preventDefault();
  
    const data = {
      username: this.username,
      password: this.password
    }

    UsersService.getUsers('users/', data.username)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/users/', data.username);
      })
      .catch(err => {
        console.log(err)
      })  
  };

  handleCheck = () => {
    if (this.state.disabled == true) {
      this.setState({
        disabled: false
      });      
    } else {
      this.setState({
        disabled: true
      })
    }
  }

  render() {    
        return (
          <div className="login-register-wrapper">
            <div className="nav-buttons">
              <h2>Login</h2>
            </div>
            <div className="form-group">
              <form id="loginform" onSubmit={ this.handleSubmit }>
                <label htmlFor="username">USERNAME</label>
                    <input type="text" id="username"
                        onChange={e => this.username = e.target.value}/>
                <label htmlFor="password">PASSWORD</label>
                    <input type="password" id="password"
                        onChange={e => this.password = e.target.value}/>
                <button
                  type="submit"
                  className="submit"
                  disabled={this.state.disabled}>
                  Submit
                </button>
              </form>
              <div className="agreement-group">
                <Popup/>
              <h3 className="agreement-label">
                Agree to Terms & Conditions
                <input
                  type="checkbox"
                  onChange={(event) => this.handleCheck(event)}/>
              </h3>
              </div>
            </div>
          </div>
        );
    }
}