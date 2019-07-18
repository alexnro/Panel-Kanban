import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class ModalAviso extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.urlParameters = new URLSearchParams(window.location.search);

        this.state = {
            show: false,
            kanban: this.urlParameters.get('name')
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleDelete = () => {
        this.props.dispatch({ type: 'DELETE_KANBAN', name: this.state.kanban });
        console.log(this.props.kanbans);
        console.log(this.state.kanban);
        
        window.location = '/perfil';
        
    }

    render() {
        return (
            <>
                <Button variant="secondary" onClick={this.handleShow}>
                    Eliminar Kanban
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <p>¿Estas seguro de querer borrar el panel Kanban?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={this.handleDelete }>Eliminar</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        kanbans: state.Kanban
    }
}

export default connect(mapStateToProps)(ModalAviso);