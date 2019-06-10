import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Panel.css';
import Ventana from '../../components/UI/Modal/Ventana';
import AllPost from '../Tareas/AllPost';

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
                                <AllPost />
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
                                    <AllPost />
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
                                    <AllPost />
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
                                    <AllPost /> 
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
                                    <AllPost />
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