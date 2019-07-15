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

    constructor(props, context) {
        super(props, context);

        this.urlParameters = new URLSearchParams(window.location.search);

        this.state = {
            tasks: [],
            kanban: this.urlParameters.get('name')
        };
    }

    componentDidMount = () => {
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
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            {this.props.posts ?
                                <tbody>
                                    {Array.from(this.props.posts).map((post) => (
                                        post.column === "1" && this.state.kanban === post.kanban &&
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
                            {this.props.posts ?
                                <tbody>
                                    {Array.from(this.props.posts).map((post) => (
                                        post.column === "2" && this.state.kanban === post.kanban &&
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
                            {this.props.posts ?
                                <tbody>
                                    {Array.from(this.props.posts).map((post) => (
                                        post.column === "3" && this.state.kanban === post.kanban &&
                                        <tr key={post._id} column={post.column}>
                                            {post.editing ? <EditComponente post={post} key={post._id} column={post.column} /> :
                                                <Tareas key={post._id} posts={this.props.posts} post={post} column={post.column} />}
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
                            {this.props.posts ?
                                <tbody>
                                    {Array.from(this.props.posts).map((post) => (
                                        post.column === "4" && this.state.kanban === post.kanban &&
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
                            {this.props.posts ?
                                <tbody>
                                    {Array.from(this.props.posts).map((post) => (
                                        post.column === "5" && this.state.kanban === post.kanban &&
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
                    <div className="Boton"><ModalTarea kanban={this.state.kanban} /></div>
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