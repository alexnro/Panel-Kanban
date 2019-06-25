import React, { Component } from 'react';
import { Container, Row, Col, Media, Tab, Tabs, Button, Modal, ModalDialog, Form } from 'react-bootstrap';
import logo from './logo.jpg';

import './Perfil.css';

class Perfil extends Component {

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
            <Container className="general">
                <Row className="columna1">
                    <Col>
                        <Media>
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={logo}
                                alt="Lo siento, parece que tenemos problemas con su imagen"
                            />
                            <Media.Body>
                                <h1>Alejandro Navarro</h1>
                                <p>putisimo amo</p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
                <Row className="columna2">
                    <Col>
                        <Tabs defaultActiveKey="Perfil" id="uncontrolled-tab-example" >
                            <Tab eventKey="Perfil" title="Perfil">
                                <h1>Nombre usuario</h1>
                                <p>Descripción</p>
                                <p>Email</p>
                                <p>Cargo</p>
                                <Button onClick={this.handleShow} variant="outline-secondary">Modificar datos</Button>
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header>
                                        <Modal.Title>Modificación Perfil</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Nombre de usuario</Form.Label>
                                                <Form.Control type="text" placeholder="Usuario" />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Descripción</Form.Label>
                                                <Form.Control as="textarea" rows="3" placeholder="Descripción" />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Correo electronico</Form.Label>
                                                <Form.Control type="email" placeholder="Email" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect2">
                                                <Form.Label>Cargo</Form.Label>
                                                <Form.Control as="select">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="outline-danger" onClick={this.handleClose}>
                                            Cancelar
                                        </Button>
                                        <Button variant="outline-success" onClick={this.handleClose}>
                                            Modificar
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Tab>
                            <Tab eventKey="Paneles" title="Paneles">

                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Perfil;