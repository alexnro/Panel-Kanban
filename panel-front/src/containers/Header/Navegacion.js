import React, { Component } from 'react';

import './Navegacion.css';

class Navegacion extends Component {

    render() {

        return (
            <nav className="navbar">
                <div className="navbar w-100 order-3">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navegacion;