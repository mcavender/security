import React, {SyntheticEvent, useState} from 'react';
import { Redirect } from "react-router-dom";

import UsersService from '../services/UsersService';
import Popup from './pages/Popup';

const Logintest = (props: { setName: (name: string) => void }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [state, setState] = useState(true);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        });

        const content = await response.json();

        setRedirect(true);
        props.setName(content.username);
    }

    if (redirect) {
        return <Redirect to="home"/>;
    }

    const handleCheck = () => {
        if (state === true) {
          setState(false)  
        } else {
          setState(true)
        }
    }

    return (
        <div className="login-register-wrapper">
          <div className="nav-buttons">
            <h2>Login</h2>
          </div>
          <div className="form-group">
            <form id="loginform" onSubmit={submit}>
                <label htmlFor="username">USERNAME</label>
                <input type="username" className="form-control" placeholder="username" required
                    onChange={e => setUsername(e.target.value)}/>
                <label htmlFor="password">PASSWORD</label>
                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}/>
                <button
                    type="submit"
                    className="submit"
                    disabled={state}>
                    Submit
                </button>
            </form>
            <div className="agreement-group">
                <Popup/>
                <h3 className="agreement-label">
                    Agree to Terms & Conditions
                    <input
                        type="checkbox"
                        onChange={(event) => handleCheck()}/>
                </h3>
              </div>
            </div>
          </div>
    );
};

export default Logintest;