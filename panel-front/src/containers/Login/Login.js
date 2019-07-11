import React, { Component, useReducer } from 'react';
import axios from 'axios';
import { getJSON } from '../../shared/utility';
import './Login.css';

class Login extends Component {

    state = {
        email: '',
        password: '',
        isValid: false
    }

    emailHandler = event => {
        this.setState({
            ...this.state,
            email: event.target.value
        });
    }

    passwordHandler = event => {
        this.setState({
            ...this.state,
            password: event.target.value
        });
    }

    submitHandler = event => {
        event.preventDefault();
        const data = {
            Email: this.state.email,
            Password: this.state.password
        }
        const url = '/login';
        axios.post(url, data)
            .then(response => {
                let token_data = getJSON(response.data);
                if (response.data !== "Usuario incorrecto") {
                    this.setState({
                        ...this.state,
                        isValid: true
                    });
                    this.loginHandler();
                    localStorage.setItem('token', token_data);
                    localStorage.setItem('email', this.state.email);
                }
                alert('Ha iniciado sesión correctamente')
            })
            .catch(error => {
                alert('Ha ocurrido un problema, vuelva a intentarlo')
                this.setState.isValid = true && this.loginHandler()
            });
    }

    loginHandler = () => {
        window.location = '/panel';
    }

    linkToRegister = () => {
        window.location = '/register';
    }

    render() {

        return (
            <div className="formulario">
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input onChange={this.emailHandler} id="email" type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Correo electrónico" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input onChange={this.passwordHandler} id="password" type="password" name="password" className="form-control" placeholder="Contraseña" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                    <input type="button" id="registerButton" className="btn btn-secondary" onClick={this.linkToRegister} value="Registrarse" />
                </form>
            </div>
        );
    };
}

export default Login;