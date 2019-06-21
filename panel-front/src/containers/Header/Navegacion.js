import React, { Component } from 'react';

import './Navegacion.css';

class Navegacion extends Component {

    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-light bg">
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
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