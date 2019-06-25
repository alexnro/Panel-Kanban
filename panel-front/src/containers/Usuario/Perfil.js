import React, { Component } from 'react';
import { Container, Row, Col, Media, Tab, Tabs, Button } from 'react-bootstrap';
import logo from './logo.jpg';

import './Perfil.css';

class Perfil extends Component {

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
                                <h5>Alejandro Navarro</h5>
                                <p>
                                    putisimo amo
                                </p>
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
                                <Button variant="outline-secondary">Modificar datos</Button>
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