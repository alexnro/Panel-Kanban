import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';


class TaskForm extends Component {
    state = {
        value: '1',
        id: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: String(new Date()),
            title,
            message,
            column: this.state.value
        }
        this.props.dispatch({
            type: 'ADD_POST', data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return (
            <div>
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
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">Añadir</Button>
                </Form>
            </div>
        );
    }
}

export default connect()(TaskForm);