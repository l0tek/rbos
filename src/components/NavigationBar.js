import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #222;

}

.navbar-brand .navbar-nav .nav-link {
    color: #fff;

    &:hover {
        color: white;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">mnemonic.guru</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About us</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
    </Styles>
)
