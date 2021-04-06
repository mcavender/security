import * as React from 'react';

import UsersService from '../../services/UsersService';

import { DataGrid } from '@material-ui/data-grid';


export default class TestTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        users:[]
    }
  }

  componentDidMount() {
    UsersService.getAllUsers().then((response) => {
      this.setState({users: response.data})
    });
  }



  render() {

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'email', headerName: 'Email', width: 130 },
      { field: 'fullname', headerName: 'Name', width: 130 },
      { field: 'phonenumber', headerName: 'Phone Number', width: 150 },
      { field: 'role', headerName: 'Role', width: 130 },
      { field: 'username', headerName: 'Username', width: 130 },
    ];

    return (
      <div style={{
        height: 400,
        width: '85%',
        margin: 'auto',
        background: 'linear-gradient(180deg, rgba(65,65,65,0.8939950980392157) 0%, rgba(193,193,193,0.8939950980392157) 95%)'
      }}>
        <DataGrid rows={this.state.users} columns={columns} pageSize={5} checkboxSelection />
      </div>
    );
  }
}