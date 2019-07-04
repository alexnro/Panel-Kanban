import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

import axios from 'axios';

import ImgPerfil from '../Usuario/ImgPerfil';
import ModalPanel from '../../components/UI/Modal/ModalPanel';

import './Sidebar.css';

class Sidebar extends Component {

    state = {
        username: '',
        email: ''
    }

    componentWillMount() {
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

            </Menu>
        );
    }
}

export default Sidebar;