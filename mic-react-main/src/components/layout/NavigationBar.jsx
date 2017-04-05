import React from 'react'
import { Nav, Navbar, NavItem, NavbarHeader, NavDropdown, MenuItem, Brand } from 'react-bootstrap/lib'
import { Link, NavLink, Route } from 'react-router-dom'

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLink = this.handleLink.bind(this);
    }
    handleLink(path) {
        alert(path);
        this.context.router.push(path);
    }
    render() {
        return (
            <Navbar id="mainNav" className="navbar-fixed-top" role="navigation" collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#page-top">M I C</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <li role="presentation"><NavLink exact to="/">Home</NavLink></li>
                        <li role="presentation"><NavLink to="/plans">Plans</NavLink></li>
                        <li role="presentation"><NavLink to="/services">Services</NavLink></li>
                        <li role="presentation"><NavLink to="/partners">Partners</NavLink></li>
                        <li role="presentation"><NavLink to="/about">About</NavLink></li>
                        <li role="presentation"><NavLink to="/team">Our Team</NavLink></li>
                        <li role="presentation"><NavLink to="/contactus">Contact Us</NavLink></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}