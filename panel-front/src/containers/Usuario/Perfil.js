import React, { Component } from 'react';
import { Container, Row, Col, Media} from 'react-bootstrap';

import withAuth from '../../withAuth';
import axios from 'axios';

import './Perfil.css';

import ModalUsuario from '../../components/UI/Modal/ModalUsuario';
import ImgPerfil from './ImgPerfil';
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
                            <p><strong>Nombre de usuario: </strong>{this.state.username}</p>
                            <p><strong>Correo electronico: </strong>{this.state.email}</p>
                            <p><strong>Cargo que ejerce: </strong>{this.state.cargo}</p>
                            <ModalUsuario />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default (withAuth(Perfil));