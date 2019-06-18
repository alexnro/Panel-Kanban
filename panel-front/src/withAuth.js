import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function withAuth(ComponentToProtect) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
            };
        }

        componentDidMount() {
            let queryParams = '?email=' + localStorage.getItem("email");
            axios.get('/checkToken' + queryParams)
                .then(response => {
                    this.setState({ loading: false });
                })
                .catch(err => {
                    console.error(err);
                    this.setState({ loading: false, redirect: true });
                });
        }

        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                return <Redirect to="/login" />;
            }
            return (
                <Fragment>
                    <ComponentToProtect {...this.props} />
                </Fragment>
            );
        }
    }
}