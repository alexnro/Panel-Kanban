import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class ModalTarea extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            value: '1',
            id: ''
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: String(new Date()),
            title,
            message,
            column: this.state.value,
            kanban: this.props.kanban
        }
        this.props.dispatch({
            type: 'ADD_POST', data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return (
            <>
                <Button variant="secondary" onClick={this.handleShow}>
                    Añadir Tarea
          </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Añadir Tarea</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Inserte un título para la tarea</Form.Label>
                                <Form.Control required type="text" ref={(input) => this.getTitle = input} placeholder="Titulo tarea" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Inserte una descripción para la tarea</Form.Label>
                                <Form.Control required as="textarea" ref={(input) => this.getMessage = input} placeholder="Descripción tarea" />
                            </Form.Group>
                            <Form.Group onChange={(e) => this.setState({ ...this.state, value: e.target.value })}>
                                <Form.Label>Seleccione una columna donde añadir la tarea</Form.Label><br />
                                <Form.Control as="select">
                                    <option value="1">Todo</option>
                                    <option value="2">In progress</option>
                                    <option value="3">For testing</option>
                                    <option value="4">Testing</option>
                                    <option value="5">Done</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="outline-secondary" type="submit" onClick={this.handleClose}>Añadir</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default connect()(ModalTarea);