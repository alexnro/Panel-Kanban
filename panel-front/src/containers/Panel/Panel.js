import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Panel.css';
import Ventana from '../../components/UI/Modal/Ventana';
import ListadoTareas from '../Tareas/ListadoTareas';

class Panel extends Component {

    render() {
        let columnas = (
            <Row>
                <Col>
                    <div className="table-responsive">
                        <table className="table table-hover" id="1">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                                <ListadoTareas />
                        </table>
                    </div>
                </Col>
                <Col>
                    <div className="table-responsive">
                        <table className="table table-hover" id="2">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                                {/* <AllPost /> */}
                        </table>
                    </div>
                </Col>
                <Col>
                    <div className="table-responsive">
                        <table className="table table-hover" id="3">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                                {/* <AllPost /> */}
                        </table>
                    </div>
                </Col>
                <Col>
                    <div className="table-responsive">
                        <table className="table table-hover" id="4">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                               {/* <AllPost />  */}
                        </table>
                    </div>
                </Col>
                <Col>
                    <div className="table-responsive">
                        <table className="table table-hover" id="5">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                                {/* <AllPost /> */}
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