import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Panel.css';
import Ventana from '../../components/UI/Modal/Ventana';

class Panel extends Component {

    render() {
        let columnas = (
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
                                        <td>
                                            
                                        </td>
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
        );

        return (
            <div className="Contenedor">
                {columnas}
                <Ventana />
            </div>
        );
    };
}

export default Panel;