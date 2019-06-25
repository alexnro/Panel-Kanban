import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import logo from './logo.jpg';

import './Perfil.css';

class Perfil extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Media>
                            <img
                                width={100}
                                height={100}
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
                {/* <Row>
                    <Col>
                        otro, COLUMNA APARTE
                    </Col>
                </Row> */}
            </Container>
        )
    }
}

export default Perfil;