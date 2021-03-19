import React from 'react';

import { Link } from "react-router-dom";

class ClassificationBanner extends React.Component {

    render() {
        return(
            <nav className="navbar navbar-expand navbar-light fixed top">
                <div className="container">
                    <Link to={'/home'} className="navbar-brand">Home</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link" >Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )        
    }
}

export default ClassificationBanner;