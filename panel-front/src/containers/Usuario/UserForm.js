import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import axios from 'axios';

class UserForm extends Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            value: '',
            username: '',
            email: ''
        };
    }

    componentWillMount() {
        let queryParams = '?email=' + localStorage.getItem('email');
        console.log(queryParams)
        axios.get('/user' + queryParams)
            .then(response => {
                console.log(response);
                let username = response.data.username
                let email = response.data.email
                this.setState({ ...this.state, username: username, email: email })
                console.log(this.state)
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.getUsername.value;
        const email = this.state.email;
        this.setState({ ...this.state, getUsername: username, email: email })
        const queryParams = '?username=' + username + '&email=' + email;
        console.log(queryParams);
        
        axios.post('/updateUser' + queryParams)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" ref={(input) => this.getUsername = input} placeholder="Usuario" defaultValue={this.state.username} />
                </Form.Group>
                <Form.Label>{this.state.email}</Form.Label><br/>
                <Button variant="outline-success" type="submit">Añadir</Button>
            </Form>
        );
    }
}

export default connect()(UserForm);