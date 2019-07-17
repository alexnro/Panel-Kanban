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
            .catch(error => {
                console.log(error);
            })
        axios.get('/getKanban')
            .then(response => {
                let kanbans = getJSON(response.data);
                this.setState({ ...this.state, kanbans: kanbans });
            })
            .catch(error => {
                console.log(error);
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
                {this.state.kanbans ?
                <ul>
                    {(this.state.kanbans).map((kanban) => (
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

const mapStateToProps = state => {
    return {
        user: state.User
    }
}

export default connect(mapStateToProps)(Sidebar);