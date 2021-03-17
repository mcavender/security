import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    
    handleSubmit = e => {
      e.preventDefault();
  
      const data = {
        username: this.username,
        password: this.password
        }

        console.log(data);
        
      axios.post('http://localhost:8080/users', data)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    };

    render() {
        return (
          <div className="login-register-wrapper">
            <div className="nav-buttons">
              <button>Login
              </button>
            </div>
            <div className="form-group">
              <form id="loginform" onSubmit={ this.handleSubmit }>
                <label htmlFor="username">USERNAME</label>
                    <input type="text" id="username"
                        onChange={e => this.username = e.target.value}/>
                <label htmlFor="password">PASSWORD</label>
                    <input type="password" id="password"
                        onChange={e => this.password = e.target.value}/>
                <button type="submit" className="submit">Submit</button>
              </form>
            </div>
          </div>
        );
    }
}