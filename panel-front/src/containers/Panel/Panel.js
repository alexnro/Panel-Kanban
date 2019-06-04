import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Panel.css';

class Panel extends Component {

    render() {

        let columnas = (
            <Container>
                <Row>
                    <Col>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        );

        return (
            <div className="Contenedor">
                {columnas}
            </div>
        );
    };
}

export default Panel;