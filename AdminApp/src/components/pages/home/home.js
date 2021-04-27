import React from 'react';
import UsersService from '../../../services/UsersService';

import { Container, Grid, Button } from '@material-ui/core';
import Sidebar from '../sidebar/SideBar';
import ViprButton from './ViprPitButton';

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
        
        const AppButton = () => {
            return (
                <Button
                    style={{ height: 200, width: '100%', minWidth: 125 }}
                    className="home-buttons"
                    elevation={5} />
            )
        }

        return (
            <>
                <Sidebar/>
                <Container maxWidth="false">
                    <div className="home-page">
                        <Grid container spacing={5} justify="center">
                            <Grid item xs={10} sm={3}>
                                <ViprButton/>
                            </Grid>
                            <Grid item xs={10} sm={3}>
                                <AppButton/>
                            </Grid>
                            <Grid item xs={10} sm={3}>
                                <AppButton/>
                            </Grid>
                            <Grid item xs={10} sm={3}>
                                <AppButton/>
                            </Grid>
                            <Grid item xs={10} sm={3}>
                                <AppButton/>
                            </Grid>
                            <Grid item xs={10} sm={3}>
                                <AppButton/>
                            </Grid>
                            <Grid item xs={10} sm={3}>
                                <AppButton/>
                            </Grid>
                            <Grid item xs={10} sm={3}>
                                <AppButton/>
                            </Grid>
                        </Grid>
                    </div>

                </Container>
            </>
        )        
    }
}

export default Home;