import Axios from 'axios';
import React from 'react';

import Nav from './nav'


class Home extends React.Component {

    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };

        Axios.get('users', config).then(
            res => {
                this.setState({
                    user: res.data
                })
            },
            err => {
                console.log(err);
            }
        )
    }

    render() {
        if (this.state.user) {
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