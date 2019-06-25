import React, { Component } from 'react';

import axios from 'axios';

class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    usernameHandler = event => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
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

    confirmPasswordHandler = event => {
        this.setState({
            ...this.state,
            confirmPassword: event.target.value
        });
    }

    submitHandler = event => {
        event.preventDefault();
        const data = {
            Username: this.state.username,
            Email: this.state.email,
            Password: this.state.password,
            ConfirmPassword: this.state.confirmPassword
        }
        const url = '/register';
        axios.post(url, data)
            .then(response => {
                console.log(response);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
                console.log(data);
            });
        this.linkToLogin();
    }

    linkToLogin = () => {
        window.location = '/login';
    }

    render() {
        return (
            <div className="formulario">
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="username">Nombre de usuario</label>
                        <input onChange={this.usernameHandler} id="username" type="text" name="username" className="form-control" aria-describedby="emailHelp" placeholder="Nombre de usuario" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input onChange={this.emailHandler} id="email" type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Correo electrónico" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input onChange={this.passwordHandler} id="password" type="password" name="password" className="form-control" placeholder="Contraseña" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPpassword">Confirmar contraseña</label>
                        <input onChange={this.confirmPasswordHandler} id="confirmPassword" type="password" name="confirmPassword" className="form-control" placeholder="Confirmar contraseña" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </form>
            </div>
        );
    }
};

export default Register;