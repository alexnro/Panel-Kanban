import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import withAuth from '../../withAuth';

class ModalPanel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    /**hola soy victor jejexd */
    this.state = {
      show: false,
      value: '',
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
    const name = this.getName.value;
    const data = {
        name
    }
    this.props.dispatch({
      type: 'ADD_KANBAN', data
    });
    this.getName.value = '';
  }

  render() {
    return (
      <>
        <Button variant="secondary" onClick={this.handleShow}>
          Añadir Panel
          </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir Panel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Inserte un nombre para el panel</Form.Label>
                <Form.Control required type="text" ref={(input) => this.getName = input} placeholder="Titulo panel" />
              </Form.Group>
              <Button variant="outline-secondary" type="submit" onClick={this.handleClose}>Añadir</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default connect()(withAuth(ModalPanel));