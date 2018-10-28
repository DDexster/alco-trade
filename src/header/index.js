import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-light nav-style">
        <button className="navbar-toggler d-md-none" type="button" data-toggle="collapse" data-target="#sidebar-toggle"
                aria-controls="sidebar-toggle" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars navbar-icon" />
        </button>
        <a className="navbar-brand" href="#">
          <img src='./img/ats-logo.png' className="nav-logo" border="0" />
        </a>
        <a className="navbar-brand nav-link d-none d-sm-none d-md-inline-block" href="#" id="account_role">Account
          Manager</a>
        <ul className="navbar-nav flex-row ml-md-auto d-xs-none d-md-flex collapse" id="nav-user-data">
          <li className="nav-item">
            <a className="nav-link nav-username" href="#" id="user_name">
              Dmytro Bondarenko
            </a>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-outline-danger" onClick={() => "javascript: log_out();"}>Logout</button>
          </li>
          <li className="nav-item">
          </li>
        </ul>
        <button className="navbar-toggler d-sm-inline-block d-md-none" type="button" data-toggle="collapse"
                data-target="#nav-user-data" aria-controls="user-nav-toggle" aria-expanded="false"
                aria-label="Toggle navigation">
          <i className="fas fa-user-circle navbar-icon" />
        </button>
      </nav>
    );
  }
}

export default Header;