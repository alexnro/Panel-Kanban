import React, { Component } from 'react';
import { Container, Row, Col, Media, Tab, Tabs } from 'react-bootstrap';
import { connect } from 'react-redux';

import withAuth from '../../withAuth';
import axios from 'axios';
import { getJSON } from '../../shared/utility';


import './Perfil.css';

import ModalUsuario from '../../components/UI/Modal/ModalUsuario';
import ImgPerfil from './ImgPerfil';
import Paneles from '../Panel/Paneles';
import Sidebar from '../Header/Sidebar';
import Navegacion from '../Header/Navegacion';

class Perfil extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            email: '',
            cargo: '',
            kanbans: []
        };
    }

    componentDidMount() {
        let queryParams = '?email=' + localStorage.getItem('email');
        axios.get('/user' + queryParams)
            .then(response => {
                let username = response.data.username
                let email = response.data.email
                let cargo = response.data.cargo
                this.setState({ ...this.state, username: username, email: email, cargo: cargo })
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentWillMount() {
        axios.get('/getKanban')
            .then(response => {
                let kanbans = getJSON(response.data);
                this.setState({ ...this.state, kanbans: kanbans });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <Sidebar />
                <Navegacion />
                <Container className="general">
                    <Row className="columna1">
                        <Col>
                            <Media>
                                <ImgPerfil />
                                <Media.Body>
                                    <h1 className="nombre">{this.state.username}</h1>
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>
                    <Row className="columna2">
                        <Col>
                            <Tabs defaultActiveKey="Perfil" id="uncontrolled-tab-example" >
                                <Tab eventKey="Perfil" title="Perfil">
                                    <p><strong>Nombre de usuario: </strong>{this.state.username}</p>
                                    <p><strong>Correo electronico: </strong>{this.state.email}</p>
                                    <p><strong>Cargo que ejerce: </strong>{this.state.cargo}</p>
                                    <ModalUsuario />
                                </Tab>
                                <Tab eventKey="Paneles" title="Paneles">
                                    <div className="panel">
                                        <ul>
                                            {(this.state.kanbans).map((kanban) => (
                                                <li style={{ color: 'black' }} key={kanban.name}>
                                                    <Paneles name={kanban.name} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect()(withAuth(Perfil));