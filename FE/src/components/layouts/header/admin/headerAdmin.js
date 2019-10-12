import React, { Component } from 'react';
// import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Avatar from '../../../../assets/images/logo/Symbol/symbol-logo.svg';
import './headerAdmin.css';

class HeaderAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            isShowCollapse: false
        }
    }
    
    toggleMenu = (e) => {
        e.preventDefault();
        var element = document.getElementById("admin-wrapper");
        element.classList.toggle("toggled");
    }
    
    render() {
        // const isScrolled = this.state.scrolled ? ' scrolled' : this.props.isTransparent ? ' scrolled' : ' bg-transparent';
        // const isShowMenu = this.state.isShowCollapse ? 'isShowMenu' : '';
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button className="navbar-toggler-2" id="menu-toggle" onClick={this.toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="admin-user-info">
                    <img src={Avatar} alt="" className="admin-avatar" />
                    <span className="nav-link dropdown-toggle admin-username" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Al Brenninkmeijer
                    </span>
                </div>
            </nav>
        )
    }
}

export default HeaderAdmin;