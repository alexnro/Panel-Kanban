import React, { Component } from 'react';
import { connect } from 'react-redux';

class Paneles extends Component {
    render() {
        return (
            <a href={"/panel?name=" + this.props.name}>{this.props.name}</a>
        );
    }
}

export default connect()(Paneles);