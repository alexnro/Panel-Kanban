import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Formulario from '../../../containers/Tareas/Formulario';

class Ventana extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type: 'ADD_POST'
        });
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
                <Button variant="secondary" onClick={this.handleShow}>
                    Añadir Tarea
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        Añadir Tarea
                    </Modal.Header>
                    <Modal.Body>
                        <Formulario />
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default Ventana;