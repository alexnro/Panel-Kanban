import React, { Component } from 'react';
import axios from '../../axios-users';

import './Login.css';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    inputHandler = event => {
        console.log(event.target.value);
        this.setState({
            ...this.state,
            email: event.target.value
        });
        console.log(this.state)
    }

    submitHandler = event => {
        console.log(this.state);
        event.preventDefault();
        const data = {
            Email: this.state.email,
            Password: this.state.password
        }
        const url = '/login';
        axios.post(url, data)
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
                        <input onChange={this.inputHandler} id="email" type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Correo electrónico" required />
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