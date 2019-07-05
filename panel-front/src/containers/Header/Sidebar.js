import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

import axios from 'axios';

import ImgPerfil from '../Usuario/ImgPerfil';
import ModalPanel from '../../components/UI/Modal/ModalPanel';
import Paneles from '../Panel/Paneles';

import './Sidebar.css';

class Sidebar extends Component {

    state = {
        username: '',
        email: '',
        kanbans: []
    }

    getJSON = a => {
        if (typeof a !== "string" || !a || a == null) return null;
        a = a.replace(/\r\n|\r|\n|\t/g, '').replace(/\\/g, '/');
        return new Function("return " + a)();
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
    }

    componentWillMount() {
        axios.get('/getKanban')
            .then(response => {
                let kanbans = this.getJSON(response.data);
                this.setState({ ...this.state, kanbans: kanbans });
                console.log(this.state);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <Menu>
                <div className="datosUsuario">
                    <span className="imagen">
                        <ImgPerfil />
                    </span>
                    {this.state.username}
                </div>
                <hr />
                <a href="/panel">Panel</a>
                <a href="/perfil">Perfil</a>
                <hr />
                <ModalPanel />
                <p>Paneles disponibles</p>
                <ul>
                    {(this.state.kanbans).map((kanban) => (
                        <li>
                            <Paneles name={kanban.name} />
                        </li>
                    ))}
                </ul>
            </Menu>
        );
    }
}

export default Sidebar;