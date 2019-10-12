import React, {Component} from 'react';
import logoLight from '../../../assets/images/logo/Horizontal/horizontal-logo.svg';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default class SideBar extends Component {
    render() {
        return (
            <div className="bg-dark border-right" id="sidebar-wrapper">
                <div className="sidebar-heading bg-light">
                    <img src={logoLight} alt="" className="sidebar-logo" />
                </div>
                <br />
                <div className="list-group list-group-flush">
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark">Homepage</Link>
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark">How it works</Link>
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark">Customer stories</Link>
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark">Pricing</Link>
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark">Careers</Link>
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark">Support</Link>
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark">Social</Link>
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark">Privacy Policy</Link>
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark">Term & Conditions</Link>
                </div>
            </div>
        )
    }
}