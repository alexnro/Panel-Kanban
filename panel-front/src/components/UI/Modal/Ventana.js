import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
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

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        this.props.dispatch({
            type:'ADD_POST', data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
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
                <PostForm/>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }

export default Ventana;