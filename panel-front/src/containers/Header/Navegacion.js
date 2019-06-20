import React, { Component } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';

import './Navegacion.css';


class Navegacion extends Component {

    conjunto() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a className="navbar-brand col-md-1" href="/">Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/panel">Panel</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row" >
                        <nav className="col-md-1 d-block bg-light sidebar">
                        {/* <div className="sidebar-sticky"> */}
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">asdfghjk</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">edfghjk</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">fxsghkajd</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#/">fdhsjuju</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">jkukfjkj</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">fgggggggggggg</a>
                                </li>
                            </ul>
                            {/* </div> */}
                        </nav>
                    </div>
                </div>
            </div>
        );
    };

    render() {

        return (
            // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            //     <Navbar.Brand href="/">Logo</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //     <Navbar.Collapse id="responsive-navbar-nav">
            //         <Nav className="mr-auto">
            //             <Nav.Link href="/login">Login</Nav.Link>
            //             <Nav.Link href="/panel">Panel</Nav.Link>
            //         </Nav>
            //         <Nav>
            //             <Nav.Link href="/logout">Logout</Nav.Link>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
            // <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            //     <a className="navbar-brand" href="/">Logo</a>

            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            //         <span className="navbar-toggler-icon"></span>
            //     </button>

            //     <div className="collapse navbar-collapse" id="collapsibleNavbar">
            //         <ul className="navbar-nav">
            //             <li className="nav-item">
            //                 <a className="nav-link" href="/login">Login</a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="/panel">Panel</a>
            //             </li>
            //         </ul>
            //         <ul className="nav navbar-nav ml-auto">
            //             <li className="nav-item">
            //                 <a className="nav-link" href="/logout">Logout</a>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>
            <this.conjunto />

        );
    }
}

export default Navegacion;