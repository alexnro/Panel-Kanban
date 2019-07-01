import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import withAuth from '../../withAuth';
import './Panel.css';
import Tareas from '../Tareas/Tareas';
import EditComponente from '../Tareas/EditComponente';
import Ventana from '../../components/UI/Modal/Ventana';

class Panel extends Component {

    state = {
        tasks: ''
    };

    componentDidMount = () => {
        axios.get('/getTasks')
            .then(response => {
                let tasks = this.getJSON(response.data);
                this.setState({ ...this.state, tasks: tasks });
                console.log(this.state);
            })
            .catch(error => {
                console.log(error);
            })
    }

    getJSON = a => {
        if (typeof a !== "string" || !a || a == null) return null;
        a = a.replace(/\r\n|\r|\n|\t/g, '').replace(/\\/g, '/');
        return new Function("return " + a)();
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
                            {this.state.tasks ?
                                <tbody>
                                    {Array.from(this.state.tasks).map((post) => (
                                        post.column === "1" &&
                                        <tr key={post._id} column={post.column}>
                                            {post.editing ? <EditComponente post={post} key={post._id} column={post.column} /> :
                                                <Tareas key={post._id} post={post} column={post.column} />}
                                        </tr>
                                    ))}
                                </tbody> :
                                <tbody></tbody>}
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
                            {this.state.tasks ?
                                <tbody>
                                    {Array.from(this.state.tasks).map((post) => (
                                        post.column === "2" &&
                                        <tr key={post._id} column={post.column}>
                                            {post.editing ? <EditComponente post={post} key={post._id} column={post.column} /> :
                                                <Tareas key={post._id} post={post} column={post.column} />}
                                        </tr>
                                    ))}
                                </tbody> :
                                <tbody></tbody>}
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
                            {this.state.tasks ?
                                <tbody>
                                    {Array.from(this.state.tasks).map((post) => (
                                        post.column === "3" &&
                                        <tr key={post._id} column={post.column}>
                                            {post.editing ? <EditComponente post={post} key={post._id} column={post.column} /> :
                                                <Tareas key={post._id} post={post} column={post.column} />}
                                        </tr>
                                    ))}
                                </tbody> :
                                <tbody></tbody>}
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
                            {this.state.tasks ?
                                <tbody>
                                    {Array.from(this.state.tasks).map((post) => (
                                        post.column === "4" &&
                                        <tr key={post._id} column={post.column}>
                                            {post.editing ? <EditComponente post={post} key={post._id} column={post.column} /> :
                                                <Tareas key={post._id} post={post} column={post.column} />}
                                        </tr>
                                    ))}
                                </tbody> :
                                <tbody></tbody>}
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
                            {this.state.tasks ?
                                <tbody>
                                    {Array.from(this.state.tasks).map((post) => (
                                        post.column === "5" &&
                                        <tr key={post._id} column={post.column}>
                                            {post.editing ? <EditComponente post={post} key={post._id} column={post.column} /> :
                                                <Tareas key={post._id} post={post} column={post.column} />}
                                        </tr>
                                    ))}
                                </tbody> :
                                <tbody></tbody>}
                        </table>
                    </div>
                </Col>
            </Row>
        );
        return (
            <div>
                <div className="Contenedor">
                    {columnas}
                    <Ventana />
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(withAuth(Panel));