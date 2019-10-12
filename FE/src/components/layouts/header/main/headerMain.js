import React, { Component } from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoLight from '../../../../assets/images/logo/Horizontal/horizontal-logo-in-dark.svg';
import './headerMain.css';

class HeaderMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            isShowCollapse: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        // const dropdownToggle = document.querySelector('.dropdown-toggle');
        // dropdownToggle.addEventListener('mouseocver', this.handleMouseOver);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    // handleMouseOver = () => {

    // }

    handleScroll = () => {
        if (window.scrollY > 20 && !this.state.scrolled) {
            this.setState({
                scrolled: true
            });
        }
        if (window.scrollY < 1 && this.state.scrolled) {
            this.setState({
                scrolled: false
            });
        }
    }

    onShowCollapse = () => {
        const isShow = document.querySelector('.navbar-collapse.show');
        if (isShow === null) {
            this.setState({
                isShowCollapse: true
            })
        } else {
            this.setState({
                isShowCollapse: false
            })
        }
    }

    render() {
        const isScrolled = this.state.scrolled ? ' scrolled' : this.props.isTransparent ? ' scrolled' : ' bg-transparent';
        const isShowMenu = this.state.isShowCollapse ? 'isShowMenu' : '';
        return (
            <Navbar bg="light" expand="lg" fixed="top" className={isScrolled}>
                <Container>
                    <Link to="/" className="navbar-brand z-index-11">
                        <img src={logoLight} alt="" className="logo-brand" />
                    </Link>
                    <div className="z-index-11 mgt-cus">
                        <Button size="large" type="primary" className="btn-primary-0 mgr-10 btn-show-on-mobile">
                            Book now
                        </Button>
                        <Navbar.Toggle 
                            aria-controls="basic-navbar-nav" 
                            onClick={this.onShowCollapse} 
                            className={isShowMenu}
                        />
                    </div>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto navbar-mb-custom-1">
                            <Link to="/" className="nav-link">How It Works</Link>
                            <Link to="/" className="nav-link">Customer Stories</Link>
                            <Link to="/" className="nav-link">Services</Link>
                            <Link to="/" className="nav-link">Pricing</Link>
                        </Nav>
                        <Nav className="navbar-mb-custom-2">
                            <NavDropdown title="Sign up" id="basic-nav-dropdown" className="btn-show-on-desktop">
                                <NavDropdown.Item>
                                    <Link to="/freelancer-signup" className="nav-link">Freelancer Sign up</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/customer-signup" className="nav-link">Customer Sign up</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Divider />
                            <Link to="/freelancer-signup" className="nav-link btn-show-on-mobile">
                                <Button size="large" type="primary" className="btn-primary-0 mgl-10">
                                    Freelancer Sign up
                                </Button>
                            </Link>
                            <Link to="/customer-signup" className="nav-link btn-show-on-mobile">
                                <Button size="large" type="primary" className="btn-primary-0 mgl-10">
                                    Customer Sign up
                                </Button>
                            </Link>
                            <Link to="/login" className="nav-link">Log in</Link>
                            <Button size="large" type="primary" className="btn-primary-0 mgl-10 btn-show-on-desktop">
                                Book now
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default HeaderMain;