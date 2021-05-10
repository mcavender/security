import React from 'react';

import AuthenticationService from '../../../services/AuthenticationService';
import UsersService from '../../../services/UsersService';
import Popup from './TermsPopup';

export default class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        hasLoginFailed: false,
        showSuccessMessage: false,
        disabled: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
      this.setState(
          {
            [event.target.name]
              : event.target.value
          }
      )
  }
    
  handleSubmit = e => {
    e.preventDefault();
    
    AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
    .then(() => {
        this.props.history.push(`/courses`)
    }).catch(() => {
        this.setState({ showSuccessMessage: false })
        this.setState({ hasLoginFailed: true })
    })
  };

  handleCheck = () => {
    if (this.state.disabled === true) {
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