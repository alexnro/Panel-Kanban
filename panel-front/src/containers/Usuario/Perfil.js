import React, { Component } from 'react';
import { Container, Row, Col, Media, Tab, Tabs, Button, Modal, Form, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import withAuth from '../../withAuth';

import './Perfil.css';
import axios from 'axios';

class Perfil extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            username: '',
            email: ''
        };
    }

    componentWillMount() {
        let queryParams = '?email=' + localStorage.getItem('email');
        console.log(queryParams)
        axios.get('/user' + queryParams)
            .then(response => {
                console.log(response);
                let username = response.data.username
                let email = response.data.email
                this.setState({ ...this.state, username: username, email: email })
                console.log(this.state)
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newUsername = this.getUsername;
        const newEmail = this.getEmail;
        const data = {
            newUsername,
            newEmail
        }
        this.props.dispatch({
            type: 'UPDATE_USER', data: data
        });
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type: 'CANCEL_EDIT', data: this.props
        })
    }

    render() {
        return (
            <Container className="general">
                <Row className="columna1">
                    <Col>
                        <Media>
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="logo"
                                alt="Lo siento, parece que tenemos problemas con su imagen"
                            />
                            <Media.Body>
                                <h1>{this.state.username}</h1>
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
                                <Button onClick={this.handleShow} variant="outline-secondary">Modificar datos</Button>
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modificación Perfil</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group>
                                                <Form.Label>Nombre de usuario</Form.Label>
                                                <Form.Control type="text" ref={(input) => this.getUsername = input} placeholder="Usuario" defaultValue={this.state.username} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Correo electronico</Form.Label>
                                                <Form.Control type="email" ref={(input) => this.getEmail = input} placeholder="Email" defaultValue={this.state.email} />
                                            </Form.Group>
                                            <ButtonGroup>
                                                <Button variant="outline-success" type="submit">Añadir</Button>
                                                <Button variant="outline-danger" onClick={this.handleCancel} >Cancelar</Button>
                                            </ButtonGroup>                                        
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                            </Tab>
                            <Tab eventKey="Paneles" title="Paneles">

                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(withAuth(Perfil));