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


    constructor(props) {
        super(props);
        this.state = {
            stylePath: JSON.parse(localStorage.getItem('stylePath')) || []
        }

        

        console.log(this.state.stylePath)
      }

    handleBtnFlatClick = () => {
        this.setState({stylePath: '/styles/bootstrap-flatly.min.css'},function () {
            localStorage.setItem('stylePath', JSON.stringify(this.state.stylePath))   
            console.log(this.state.stylePath);
        });
           
    }    

    handleBtnDarkClick = () => {
        this.setState({stylePath: '/styles/bootstrap-darkly.min.css'},function () {
            localStorage.setItem('stylePath', JSON.stringify(this.state.stylePath))   
            console.log(this.state.stylePath);
        });   
    }      
     
    render(){
        return (
        <Styles>
            <link rel="stylesheet" type="text/css" href={this.state.stylePath} /> 
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
                    <Dropdown.Item onClick={this.handleBtnFlatClick}>Flatly</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleBtnDarkClick}>Darkly</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Form>                
            </Navbar>
        </Styles>
        )
    }
}
