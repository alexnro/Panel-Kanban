import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Logout extends Component {
    
    deleteTokenHandler = () => {
        axios.post('/logout', localStorage.getItem("token"))
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
        return <Redirect to="/" />
    }
}

export default Logout;