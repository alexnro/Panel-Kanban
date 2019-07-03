import React, { Component } from 'react';
import Avatar from 'react-avatar';

import axios from 'axios';

import './ImgPerfil.css';

class ImgPerfil extends Component {

    state = {
        username: 'Sandra'
    }

    getUsername() {
        let queryParams = '?email=' + localStorage.getItem('email');
        console.log(queryParams)
        axios.get('/user' + queryParams)
            .then(response => {
                console.log(response);
                let username = response.data.username
                this.setState({ ...this.state, username: username })
                console.log(this.state)
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <span className="imagenPerfil">
                <Avatar colors={['#ccccff', '#00ffff', '#ccffcc']}/>
            </span>
        );
    }
}

export default ImgPerfil;

