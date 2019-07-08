import React, { Component } from 'react';
import Avatar from 'react-avatar';

import './ImgPerfil.css';

class ImgPerfil extends Component {

    render() {
        return (
            <span className="imagenPerfil">
                <Avatar skypeId="sitebase" />
            </span>
        );
    }
}

export default ImgPerfil;

