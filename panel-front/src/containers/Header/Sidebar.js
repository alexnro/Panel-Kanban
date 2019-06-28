import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './Sidebar.css';

export default Sidebar => {
    return (
        <Menu>
            <div>
                <img src="logo" alt="holi" />
                <p>Nombre</p>
            </div>
            <hr />
            <a href="/panel">Panel</a>
            <a href="/perfil">Perfil</a>
            <hr />
            <p>Paneles disponibles</p>
        </Menu>
    );
}