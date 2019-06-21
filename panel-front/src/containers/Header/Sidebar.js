import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './Sidebar.css';

export default Sidebar => {
    return (
        <Menu>
            <a href="/panel">Panel</a>
        </Menu>
    );
}