import React from 'react';

import UsersService from '../services/UsersService';




class UsersComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        UsersService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> List</h1>
                <table className="table mt-5 text-center">
                    <thead>
                        <tr>
                            <td>User ID</td>
                            <td>City</td>
                            <td>Email</td>
                            <td>Name</td>
                            <td>Status</td>
                            <td>Phone Number</td>
                            <td>Role</td>
                            <td>State</td>
                            <td>Street</td>
                            <td>Username</td>
                            <td>Zip</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.city}</td>
                                    <td>{user.email}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.phonenumber}</td>
                                    <td>{user.role}</td>
                                    <td>{user.state}</td>
                                    <td>{user.street}</td>
                                    <td>{user.username}</td>
                                    <td>{user.zip}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UsersComponent;