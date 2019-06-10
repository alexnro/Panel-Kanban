import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import PostForm from '../../../containers/Tareas/PostForm';

class Ventana extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
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
          <Button variant="primary" onClick={this.handleShow}>
            Añadir Tarea
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Body>
                <PostForm />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

export default Ventana;