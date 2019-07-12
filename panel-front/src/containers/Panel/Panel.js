import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getJSON } from '../../shared/utility';

import './Panel.css';

import withAuth from '../../withAuth';
import Tareas from '../Tareas/Tareas';
import EditComponente from '../Tareas/EditComponente';
import ModalTarea from '../../components/UI/Modal/ModalTarea';
import Sidebar from '../Header/Sidebar';
import Navegacion from '../Header/Navegacion';
import axios from 'axios';

class Panel extends Component {

    state = {
        tasks: ''
    };

    componentDidMount = () => {
        this.getTasks();
        console.log(this.props.posts)
    }

    componentDidUpdate = () => {
        if (this.state.tasks.length !== this.props.posts.length) {
            this.getTasks()
        }
    }

    getTasks = () => {
        axios.get('/getTasks')
            .then(response => {
                let tasks = getJSON(response.data);
                this.setState({ ...this.state, tasks: tasks }, () => this.props.dispatch({ type: 'GET_POSTS', tasks: this.state.tasks }));
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let columnas = (
            <Row>
                <Col>
                    <div className="table-responsive" column="1">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Todo</th>
                                </tr>
                            </thead>
                            {this.props.posts ?
                                <tbody>
                                    {Array.from(this.props.posts).map((post) => (
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
                                    <th scope="col">In progress</th>
                                </tr>
                            </thead>
                            {this.props.posts ?
                                <tbody>
                                    {Array.from(this.props.posts).map((post) => (
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
                                    <th scope="col">For testing</th>
                                </tr>
                            </thead>
                            {this.props.posts ?
                                <tbody>
                                    {Array.from(this.props.posts).map((post) => (
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
                                    <th scope="col">Testing</th>
                                </tr>
                            </thead>
                            {this.props.posts ?
                                <tbody>
                                    {Array.from(this.props.posts).map((post) => (
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
                                    <th scope="col">Done</th>
                                </tr>
                            </thead>
                            {this.props.posts ?
                                <tbody>
                                    {Array.from(this.props.posts).map((post) => (
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
                <Sidebar />
                <Navegacion />   
                <div className="Contenedor">
                    <div className="Boton"><ModalTarea /></div>
                    {columnas}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        posts: state.Tareas
    }
}

export default connect(mapStateToProps)(withAuth(Panel));