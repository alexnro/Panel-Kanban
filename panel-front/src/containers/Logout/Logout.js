import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

class Logout extends Component {
    
    deleteTokenHandler = () => {
        let email = localStorage.getItem("email");
        const queryParams = '?email=' + email;
        axios.post('/logout' + queryParams)
            .then(response => {
            })
            .catch(error => {
            })
    }
    
    render() {
        this.deleteTokenHandler();
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        return <Redirect to="/login" />
    }
}

export default Logout;