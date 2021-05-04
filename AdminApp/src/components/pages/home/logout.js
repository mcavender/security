import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 50px;
  position: relative;
  top: -100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

class Logout extends React.Component {    

    render() {

        return (
            <>
                <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavIcon to='#'>
                    </NavIcon>
                </Nav>
                </IconContext.Provider>
                <div className="login-register-wrapper">
                    <div className="nav-buttons">
                        <h2>Logout Successful</h2>
                        <Link to='/login' style={{ color: 'white' }}>
                            Return to Login Page
                        </Link>
                    </div>
                </div>
            </>
       )  
    }            
}

export default Logout;