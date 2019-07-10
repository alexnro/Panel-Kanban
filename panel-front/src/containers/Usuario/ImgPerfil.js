import React, { Component } from 'react';
import classNames from 'classnames';
import axios from 'axios';

import './ImgPerfil.css';

class ImgPerfil extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            username: ''
        };
    }

    componentWillMount() {
        let queryParams = '?email=' + localStorage.getItem('email');
        axios.get('/user' + queryParams)
            .then(response => {
                let username = response.data.username
                this.setState({ ...this.state, username: username })
            })
            .catch(error => {
                console.log(error);
            })
    }

    _getName(){
        let name = this.state.username;
        return name
                .split(' ')
                .map( item => item.charAt(0) )
                .slice(0,1)
                .join(' ');
    }

    render(){
        let { size }  = this.props;
        let container = classNames('avatar',size);
        return (
            <span className={container}>
                <span>{this._getName()}</span>
            </span>
        );
    }
}

export default ImgPerfil;

