import React, { Component } from 'react';
import { connect } from 'react-redux';

class Paneles extends Component {
    render() {
        return (
            <p>{this.props.name}</p>
        );
    }
}

export default connect()(Paneles);