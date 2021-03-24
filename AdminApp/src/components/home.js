import React from 'react';
import UsersService from '../services/UsersService';

import Nav from './nav'


class Home extends React.Component {

    componentDidMount() {

        UsersService.getUsers('users').then(
            res => {
                this.setState({users: res.data})

            },
            err => {
                console.log(err);
            }
        )
    }

    render() {
        if (this.state.users) {
            return (
                <h2> {this.username} </h2>
            )
        }
        return (
            <div>
                <Nav/>
                <h2>You are not logged in</h2>
            </div>
        )        
    }
}

export default Home;