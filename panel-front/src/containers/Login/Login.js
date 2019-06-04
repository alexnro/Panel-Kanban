import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="formulario">
                <form method="POST">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" value="Send">
                            Submit
                        </Button>
                    </Form>
                </form>
            </div>
        );
    };
}

export default Login;