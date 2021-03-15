import React from 'react';

import TeamUsersService from '../services/TeamUsersService';

class TeamUsersComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        TeamUsersService.getTeamUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User ID</td>
                            <td>Email</td>
                            <td>Name</td>
                            <td>Rank</td>
                            <td>Status</td>
                            <td>Team</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.userid}</td>
                                    <td>{user.email_address}</td>
                                    <td>{user.name}</td>
                                    <td>{user.rank}</td>
                                    <td>{user.status}</td>
                                    <td>{user.team}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TeamUsersComponent;