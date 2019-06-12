import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import './Panel.css';
import Ventana from '../../components/UI/Modal/Ventana';
import EditComponente from '../Tareas/EditComponente';
import Tareas from '../Tareas/Tareas';

class Panel extends Component {

    // state = {
    //     columna1: [],
    //     columna2: [],
    //     columna3: [],
    //     columna4: [],
    //     columna5: []
    // }

    // switch (key) {
    //     case value:

    //         break; 
    //     default:
    //         break;
    // }

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
                            <tbody>
                                {this.props.posts.map((post) => (
                                    <tr key={post.id}>
                                        {post.editing ? <EditComponente post={post} key={post.id} /> :
                                            <Tareas key={post.id} post={post} value="1" />}
                                    </tr>
                                ))}
                            </tbody>
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
                            <tbody>
                                {/* {this.props.posts.map((post) => (
                                    <tr key={post.id}>
                                        {post.editing ? <EditComponente post={post} key={post.id} /> :
                                            <Tareas key={post.id} post={post} value="2" />}
                                    </tr>
                                ))} */}
                            </tbody>
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
                            <tbody>
                                {/* {this.props.posts.map((post) => (
                                    <tr key={post.id}>
                                        {post.editing ? <EditComponente post={post} key={post.id} /> :
                                            <Tareas key={post.id} post={post} value="3" />}
                                    </tr>
                                ))} */}
                            </tbody>
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
                            <tbody>
                                {/* {this.props.posts.map((post) => (
                                    <tr key={post.id}>
                                        {post.editing ? <EditComponente post={post} key={post.id} /> :
                                            <Tareas key={post.id} post={post} value="4" />}
                                    </tr>
                                ))} */}
                            </tbody>
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
                            <tbody>
                                {/* {this.props.posts.map((post) => (
                                    <tr key={post.id}>
                                        {post.editing ? <EditComponente post={post} key={post.id} /> :
                                            <Tareas key={post.id} post={post} value="5" />}
                                    </tr>
                                ))} */}
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

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(Panel);