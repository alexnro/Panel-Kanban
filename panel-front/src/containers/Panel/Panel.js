import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import axios from 'axios';
import withAuth from '../../withAuth';

import './Panel.css';

import ModalTarea from '../../components/UI/Modal/ModalTarea';
import EditComponente from '../Tareas/EditComponente';
import Tareas from '../Tareas/Tareas';

class Panel extends Component {

    state = {
        tasks: ''
    };

    getTasks = () => {
        axios.get('/getTasks')
            .then(response => {
                console.log(response);
                return response.data;
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
            <div>
                <div className="contenedor">
                    <ModalTarea /><br/><br/>
                    {columnas}
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