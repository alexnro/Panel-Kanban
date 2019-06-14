import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import './Panel.css';
import Ventana from '../../components/UI/Modal/Ventana';
import EditComponente from '../Tareas/EditComponente';
import Tareas from '../Tareas/Tareas';

class Panel extends Component {
    constructor(props) {
        super();
        this.state = {
            columna1: [],
            columna2: [],
            columna3: [],
            columna4: [],
            columna5: []
        };
    }

    añadir() {
        if (this.post.column === "1") {
            this.columna1.push(<Tareas />)
        }
        if (this.post.column === "2") {
            this.columna2.push(<Tareas />)
        }
        if (this.post.column === "3") {
            this.columna3.push(<Tareas />)
        }
        if (this.post.column === "4") {
            this.columna4.push(<Tareas />)
        }
        if (this.post.column === "5") {
            this.columna5.push(<Tareas />)
        }
    }

    render() {
        let columnas = (
            <Row>
                <Col>
                    <div className="table-responsive" column="1">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.posts.map((post) => (
                                    post.column === "1" &&
                                    <tr key={post.id} column={post.column}>
                                        {post.editing ? <EditComponente post={post} key={post.id} column={post.column} /> :
                                            <Tareas key={post.id} post={post} column={post.column} />}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col>
                    <div className="table-responsive" column="2">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.posts.map((post) => (
                                    post.column === "2" && 
                                    <tr key={post.id} column={post.column}>
                                        {post.editing ? <EditComponente post={post} key={post.id} column={post.column} /> :
                                            <Tareas key={post.id} post={post} column={post.column} />}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col>
                    <div className="table-responsive" column="3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.posts.map((post) => (
                                    post.column === "3" &&
                                    <tr key={post.id} column={post.column}>
                                        {post.editing ? <EditComponente post={post} key={post.id} column={post.column} /> :
                                            <Tareas key={post.id} post={post} column={post.column} />}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col>
                    <div className="table-responsive" column="4">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.posts.map((post) => (
                                    post.column === "4" &&
                                    <tr key={post.id} column={post.column}>
                                        {post.editing ? <EditComponente post={post} key={post.id} column={post.column} /> :
                                            <Tareas key={post.id} post={post} column={post.column} />}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col>
                    <div className="table-responsive" column="5">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.posts.map((post) => (
                                    post.column === "5" &&
                                    <tr key={post.id} column={post.column}>
                                        {post.editing ? <EditComponente post={post} key={post.id} column={post.column} /> :
                                            <Tareas key={post.id} post={post} column={post.column} />}
                                    </tr>
                                ))}
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