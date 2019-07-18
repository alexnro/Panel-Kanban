import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';

import axios from 'axios';

import ModalPanel from '../../components/UI/Modal/ModalPanel';
import Paneles from '../Panel/Paneles';
import { getJSON } from '../../shared/utility';

import './Sidebar.css';

class Sidebar extends Component {

    state = {
        username: '',
        email: '',
        cargo: '',
        kanbans: []
    }

    componentWillMount() {
        let queryParams = '?email=' + localStorage.getItem('email');
        axios.get('/user' + queryParams)
            .then(response => {
                let username = response.data.username;
                let cargo = response.data.cargo;
                let email = response.data.email;
                this.setState({ ...this.state, username: username, email: email, cargo: cargo }, () => this.props.dispatch({ type: 'GET_USER', user: this.state }));
            })
        axios.get('/getKanban')
            .then(response => {
                let kanbans = getJSON(response.data);
                this.props.dispatch({ type: 'GET_KANBAN', kanbans: kanbans });
            })
    }

    render() {
        return (
            <Menu>
                <div className="datosUsuario">
                    {this.props.user.username}
                </div>
                <hr />
                <a href="/perfil" className="superior">Perfil</a>
                <hr />
                <ModalPanel />
                <p>Paneles disponibles</p>
                {this.props.kanbans ?
                    <ul>
                        {Array.from(this.props.kanbans).map((kanban) => (
                            <li key={kanban.name}>
                                <Paneles kanban={kanban} name={kanban.name} />
                            </li>
                        ))}
                    </ul>
                    : <ul></ul>}
            </Menu>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        kanbans: state.Kanban,
        user: state.User
    }
}

export default connect(mapStateToProps)(Sidebar);