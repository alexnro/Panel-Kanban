import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Logout extends Component {
    
    deleteTokenHandler = () => {
        let email = localStorage.getItem("email");
        const queryParams = '?email=' + email;
        axios.post('/logout' + queryParams)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    render() {
        this.deleteTokenHandler();
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        return <Redirect to="/" />
    }
}

export default Logout;