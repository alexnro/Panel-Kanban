import React, { Component } from 'react';
import axios from 'axios';

import './Register.css';

class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        cargo: '',
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
    cargoHandler = event => {
        this.setState({
            ...this.state,
            cargo: event.target.value
        })
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
            Cargo: this.state.cargo,
            Password: this.state.password,
            ConfirmPassword: this.state.confirmPassword
        }
        if (data.Password !== data.ConfirmPassword) {
            alert('La confirmación de contraseña no coincide con la contraseña');
        } else {
            const url = '/register';
            axios.post(url, data)
                .then(response => {
                    this.linkToLogin(alert('Se ha registrado correctamente'));
                })
                .catch(error => {
                    alert('El usuario o el email ya existen, por favor use uno diferente');
                });
        }
    }

    linkToLogin = () => {
        window.location = '/login';
    }

    render() {
        return (
            <div>
                <div className="link">
                    <a href="/login">Volver al login</a>
                </div>
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
                            <label htmlFor="username">Cargo</label>
                            <input onChange={this.cargoHandler} id="cargo" type="text" name="cargo" className="form-control" aria-describedby="emailHelp" placeholder="Cargo" />
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
            </div>
        );
    }
};

export default Register;