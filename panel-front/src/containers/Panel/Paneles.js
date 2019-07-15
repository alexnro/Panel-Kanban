import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Paneles.css';

class Paneles extends Component {
    render() {
        return (
            <a href={"/panel?name=" + this.props.name}>{this.props.name}</a>
        );
    }
}

export default connect()(Paneles);