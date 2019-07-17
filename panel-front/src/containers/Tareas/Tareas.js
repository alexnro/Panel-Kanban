import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, ButtonGroup } from 'react-bootstrap';


class Tareas extends Component {

    editHandler = () => {
        this.props.dispatch({ type: 'EDIT_POST', id: this.props.post._id });
    }

    deleteHandler = () => {
        this.props.dispatch({ type: 'DELETE_POST', id: this.props.post._id });
    }

    render() {
        return (
            <td key={this.props.post._id}>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.post.title}</Card.Title>
                        <Card.Text>{this.props.post.message}</Card.Text>
                    </Card.Body>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="outline-secondary" size="sm"
                            onClick={this.editHandler}>
                            Editar</Button>
                        <Button variant="outline-secondary" size="sm"
                            onClick={this.deleteHandler}>
                            Eliminar</Button>
                    </ButtonGroup>
                </Card>
            </td>
        );
    }
}

export default connect()(Tareas);