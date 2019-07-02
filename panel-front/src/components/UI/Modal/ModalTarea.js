import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import TaskForm from '../../../containers/Tareas/TaskForm';

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
          <Button variant="secondary" onClick={this.handleShow}>
            Añadir Tarea
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              Añadir Tarea
            </Modal.Header>
            <Modal.Body>
              <TaskForm/>
            </Modal.Body>
          </Modal>
        </>
      );
    }
}

export default ModalTarea;