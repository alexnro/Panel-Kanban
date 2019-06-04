import React, { Component } from 'react';
import axios from '../../axios-users';

import './Login.css';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    submitHandler = event => {
        event.preventDefault();
        const data = {
            Username: this.state.username,
            Email: this.state.email,
        }
        const url = 'http://localhost:5000/login';
        axios
            .post(url, data)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
                console.log(data);
            });
    }

    render() {

        return (
            <div className="formulario">
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input id="email" type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Correo electrónico" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input id="password" type="password" name="password" className="form-control" placeholder="Contraseña" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                </form>
            </div>
        );
    };
}

export default Login;