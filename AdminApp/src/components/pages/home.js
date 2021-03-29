import React from 'react';
import UsersService from '../../services/UsersService';

import { Container } from '@material-ui/core';
import Sidebar from '../sidebar/SideBar';


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
        return (
            <Container maxWidth="false">
            <Sidebar/>
                <div className="home-page">
                </div>
            </Container>
        )        
    }
}

export default Home;