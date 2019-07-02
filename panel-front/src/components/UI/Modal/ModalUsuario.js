import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import UserForm from '../../../containers/Usuario/UserForm';

class ModalTarea extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Button onClick={this.handleShow} variant="outline-secondary">Modificar datos</Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modificación Perfil</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <UserForm />
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default ModalTarea;