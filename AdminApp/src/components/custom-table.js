/*
This is the main module that builds the table.  It uses
a table called MaterialTable that performs sorting and
searching on the data that we provide it.  We pass in 
the columns and data that we want the table to manage.

Of particular interest, notice how I instantiate the
api and call api.createEntity.  This uses a React
Hook to asynchronously fetch the user data from the
server.

The material-table also exposes the editable property
which allows you to perform operations on the data 
when it is created, edited, or deleted.  Notice how 
I use React Hooks to control the updating to the 
server.
*/

import React, { useState, useEffect, Fragment } from 'react';
import MaterialTable from 'material-table';
import {API} from '../services/API';

export default function CustomTable({ dataUrl }) {

  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const api = new API(dataUrl);
  
  api.createEntity({ name: 'user'});
  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        api.endpoints.user.getAll()
          .then(response => {
            setData(response.data);
            setIsLoading(false);
          })
          .catch(e => {
            console.log(e);
          });
      }, 600);
    })
  },[]);

  return (
    <Fragment>
      {isLoading ? (
        <div> Loading ...</div >) :
        (

          <MaterialTable
            title='Administer Accounts'
            columns={[
              { title: 'Username', field: 'username' },
              { title: 'Full Name', field: 'fullname' },
              { title: 'Role', field: 'role' },
              { title: 'Phone', field: 'phonenumber' },
              { title: 'Email', field: 'email' },
              { title: 'Password', field: 'password'}, 
            ]}
            options={{
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              }
            }}
            data={data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    console.log("newRow=" + newData);
                    api.endpoints.user.create(newData)
                      .then(response => {
                        setData((prevData) =>
                          [...prevData, newData]
                        );
                        console.log("Response=" + response.data);
                      })
                      .catch(e => {
                        console.log(e);
                      });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      api.endpoints.user.update(newData)
                        .then(response => {
                          console.log("Response=" + response.data);
                          let newArray = [...data];
                          newArray[data.indexOf(oldData)] = newData;
                          setData(newArray);
                          
                        })
                        .catch(e => {
                          console.log(e);
                        });

                    }
                  }, 600);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    api.endpoints.user.delete(oldData.id)
                    .then(response => {
                      console.log("Response=" + response.data);
                      let newArray = [...data];
                      newArray.splice(data.indexOf(oldData), 1);
                      setData(newArray);
                    })
                    .catch(e => {
                      console.log(e);
                    });
                  }, 600);
                }),
            }}
          />
        )
      }
    </Fragment>
  )
}