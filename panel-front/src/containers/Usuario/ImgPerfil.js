import React, { Component } from 'react';
import Avatar, { ConfigProvider } from 'react-avatar';

import axios from 'axios';

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
            <ConfigProvider colors={['#ccccff', '#00ffff', '#ccffcc']}>
                <Avatar/>
            </ConfigProvider>
        );
    }
}

export default ImgPerfil;

