import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
              <li class="nav-item active">
              <a class="navbar-brand" href="/">Logo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/panel">Panel</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </nav>
        );
    }
}

export default Header;