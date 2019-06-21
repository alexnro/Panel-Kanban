import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { slide as Menu } from 'react-burger-menu';
import Sidebar from '../Header/Sidebar';

import './Navegacion.css';


class Navegacion extends Component {

    //  conjunto() {
    //     return (
    //         <div>
    //             <nav className="navbar navbar-expand-md bg-dark navbar-dark">
    //                 <a className="navbar-brand col-md-2" href="/">Logo</a>
    //                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    //                     <span className="navbar-toggler-icon"></span>
    //                 </button>

    //                 <div className="collapse navbar-collapse" id="collapsibleNavbar">
    //                     <ul className="navbar-nav">
    //                         <li className="nav-item">
    //                             <a className="nav-link" href="/login">Login</a>
    //                         </li>
    //                         <li className="nav-item">
    //                             <a className="nav-link" href="/panel">Panel</a>
    //                         </li>
    //                     </ul>
    //                     <ul className="nav navbar-nav ml-auto">
    //                         <li className="nav-item">
    //                             <a className="nav-link" href="/logout">Logout</a>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </nav>

    //             <div class="container-fluid h-100">
    //                 <div class="row h-100">
    //                     <aside class="col-12 col-md-2 p-0 bg-dark">
    //                         <nav class="navbar navbar-expand navbar-light bg-light flex-md-column flex-row align-items-start">
    //                             <div class="collapse navbar-collapse">
    //                                 <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
    //                                     <li class="nav-item">
    //                                         <a class="nav-link pl-0" href="/">76ro9iutot</a>
    //                                     </li>
    //                                     <li class="nav-item">
    //                                         <a class="nav-link pl-0" href="/">Liiulhklkhk</a>
    //                                     </li>
    //                                     <li class="nav-item">
    //                                         <a class="nav-link pl-0" href="/">gkjñljkñ</a>
    //                                     </li>
    //                                     <li class="nav-item">
    //                                         <a class="nav-link pl-0" href="/">jgkñkgjlñkñ</a>
    //                                     </li>
    //                                     <li class="nav-item">
    //                                         <a class="nav-link pl-0" href="/">Lihkljlkñnk</a>
    //                                     </li>
    //                                     <li class="nav-item">
    //                                         <a class="nav-link pl-0" href="/">Linkglñjkñk</a>
    //                                     </li>
    //                                     <li class="nav-item">
    //                                         <a class="nav-link pl-0" href="/">gkjñj</a>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </nav>
    //                     </aside>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    render() {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/panel">Panel</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
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
            // <this.conjunto />

        );
    }
}

export default Navegacion;