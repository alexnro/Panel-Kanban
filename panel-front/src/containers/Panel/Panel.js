import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import withAuth from '../../withAuth';
import './Panel.css';
import Tareas from '../Tareas/Tareas';
import EditComponente from '../Tareas/EditComponente';
import ModalTarea from '../../components/UI/Modal/ModalTarea';
import { getJSON } from '../../shared/utility';

class Panel extends Component {

    state = {
        tasks: ''
    };

    componentDidMount = () => {
        this.getTasks();
        console.log(this.props.posts)
    }

    componentDidUpdate = () => {
        let equal = false;
        console.log(this.state.tasks[0]);
        console.log(this.props.posts);
        console.log(this.props.posts[0]);
        if (this.state.tasks.length !== this.props.posts.length) {
            equal = true;
            console.log(equal)
        }
        console.log(equal)
        if (equal) {
            console.log(this.state.tasks)
            console.log(this.props.posts)
            this.getTasks();
            console.log(this.state.tasks)
            console.log(this.props.posts)
        }
    }

    getTasks = () => {
        axios.get('/getTasks')
            .then(response => {
                let tasks = getJSON(response.data);
                this.setState({ ...this.state, tasks: tasks }, () => this.props.dispatch({ type: 'GET_POSTS', tasks: this.state.tasks }));
                console.log(this.state);
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
            <div className="Contenedor">
                <div className="Boton"><ModalTarea /></div>
                {columnas}
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