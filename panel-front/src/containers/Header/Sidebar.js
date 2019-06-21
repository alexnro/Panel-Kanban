import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './Sidebar.css';

export default props => {
    return (
        <Menu {...props}>
            <a href="/login">Login</a>
            <a href="/panel">Panel</a>
            <a href="/logout">Logout</a>
        </Menu>
    );
}