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
        kanbans: ''
    }

    componentDidMount() {
        let queryParams = '?email=' + localStorage.getItem('email');
        axios.get('/user' + queryParams)
            .then(response => {
                let username = response.data.username
                let email = response.data.email
                this.setState({ ...this.state, username: username, email: email })
            })
            .catch(error => {
                console.log(error);
            })
        this.getKanban();
        console.log(this.props.kanban)
    }

    componentDidUpdate() {
        if (this.state.kanbans.length === this.props.paneles.length) {
            this.getKanban()
        }
    }

    getKanban() {
        axios.get('/getKanban')
            .then(response => {
                let kanbans = getJSON(response.data);
                this.setState({ ...this.state, kanbans: kanbans }, () => this.props.dispatch({ type: 'GET_KANBAN', kanbans: this.state.kanbans }));
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <Menu>
                <div className="datosUsuario">
                    {this.state.username}
                </div>
                <hr />
                <a href="/panel">Panel</a>
                <a href="/perfil">Perfil</a>
                <hr />
                <ModalPanel />
                <p>Paneles disponibles</p>
                <ul>
                    {Array.from(this.props.paneles).map((kanban) => (
                        <li key={kanban.name}>
                            <Paneles kanban={kanban} name={kanban.name} />
                        </li>
                    ))}
                </ul>
            </Menu>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        paneles: state
    }
}

export default connect(mapStateToProps)(Sidebar);