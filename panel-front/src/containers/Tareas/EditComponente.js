import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, ButtonGroup } from 'react-bootstrap';

class EditComponente extends Component {
    state = {
        value: this.props.column,
        column: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const newColumn = this.state.value;
        this.setState({ ...this.state, column: newColumn })
        const data = {
            newTitle,
            newMessage,
            newColumn
        }
        this.props.dispatch({
            type: 'UPDATE', id: this.props.post._id, data: data
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
            <td>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Inserte un nuevo título</Form.Label>
                        <Form.Control type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Titulo tarea" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Inserte una nueva descripción</Form.Label>
                        <Form.Control as="textarea" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message} placeholder="Descripción tarea" />
                    </Form.Group>
                    <Form.Group onChange={(e) => this.setState({ ...this.state, value: e.target.value })}>
                        <Form.Label>Seleccione una nueva columna</Form.Label><br />
                        <Form.Control as="select" defaultValue={this.props.column}>
                            <option value="1">Todo</option>
                            <option value="2">In progress</option>
                            <option value="3">For testing</option>
                            <option value="4">Testing</option>
                            <option value="5">Done</option>
                        </Form.Control>
                    </Form.Group>
                    <ButtonGroup>
                        <Button variant="outline-success" type="submit">Añadir</Button>
                        <Button variant="outline-danger" onClick={this.handleCancel} >Cancelar</Button>
                    </ButtonGroup>
                </Form>
            </td>
        );
    }
}

export default connect()(EditComponente);