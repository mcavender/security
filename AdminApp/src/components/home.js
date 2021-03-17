import React from 'react';

import Nav from './nav'


class Home extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <h2>You are not logged in</h2>
            </div>
        )        
    }
}

export default Home;