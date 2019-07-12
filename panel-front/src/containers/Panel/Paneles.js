import React, { Component } from 'react';
import { connect } from 'react-redux';

class Paneles extends Component {
    render() {
        return (
            <a href="#">{this.props.name}</a>
        );
    }
}

export default connect()(Paneles);