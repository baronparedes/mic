import React from 'react'
import { Nav, Navbar, NavItem, NavbarHeader, NavDropdown, MenuItem, Brand } from 'react-bootstrap/lib'

export default class NavigationBar extends React.Component {
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
                        <NavItem eventKey={1}>About</NavItem>
                        <NavDropdown eventKey={2} title="Services" id="nav-services">
                            <MenuItem eventKey={2.1}>
                                Service 1
                            </MenuItem>
                            <MenuItem eventKey={2.2}>
                                Service 2
                            </MenuItem>
                            <MenuItem eventKey={2.3}>
                                Service 3
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Plans" id="nav-services">
                            <MenuItem eventKey={3.1}>
                                Individual
                            </MenuItem>
                            <MenuItem eventKey={3.2}>
                                Family
                            </MenuItem>
                            <MenuItem eventKey={3.3}>
                                Corporate
                            </MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4}>Partners</NavItem>
                        <NavItem eventKey={5}>Contact Us</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}