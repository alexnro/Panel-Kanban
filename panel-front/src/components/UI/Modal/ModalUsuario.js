import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import axios from 'axios';

class ModalUsuario extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            value: '',
            username: '',
            cargo: '',
            email: ''
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    componentWillMount() {
        let queryParams = '?email=' + localStorage.getItem('email');
        axios.get('/user' + queryParams)
            .then(response => {
                let username = response.data.username;
                let email = response.data.email;
                let cargo = response.data.cargo;
                this.setState({ ...this.state, username: username, email: email, cargo: cargo })
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.getUsername.value;
        const email = this.state.email;
        const cargo = this.getCargo.value;
        let data = {
            username: username,
            cargo: cargo
        }
        const queryParams = '?username=' + username + '&email=' + email + '&cargo=' + cargo;
        axios.post('/updateUser' + queryParams)
            .then(response => {
                if (response.data === 'User updated') {
                    this.props.dispatch({ type: 'UPDATE_USER', data: data });
                    this.setState({ ...this.state, getUsername: username, email: email, cargo: cargo });
                } else {
                    alert('El nombre de usuario ya está en uso');
                }
            })
    }

    render() {
        return (
            <>
                <Button onClick={this.handleShow} variant="outline-dark">
                    Modificar datos
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modificación Perfil</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" ref={(input) => this.getUsername = input} placeholder="Usuario" defaultValue={this.props.user.username} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Cargo</Form.Label>
                                <Form.Control type="text" ref={(input) => this.getCargo = input} placeholder="Cargo" defaultValue={this.props.user.cargo} />
                            </Form.Group>
                            <Button variant="outline-success" type="submit" onClick={this.handleClose}>Añadir</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.User
    }
}

export default connect(mapStateToProps)(ModalUsuario);