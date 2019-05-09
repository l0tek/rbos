import React, {Component} from 'react';
import {Nav, Navbar, Form, Dropdown} from 'react-bootstrap';
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

export  class NavigationBar extends Component {
    handleClick = (event) => {
        console.log('test');
      }      
    render(){
        return (
        <Styles>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/">mnemonic.guru</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <Nav>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/test">Test</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About us</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
                <Form inline>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Theme
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={this.handleClick}>Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Form>                
            </Navbar>
        </Styles>
        )
    }
}
