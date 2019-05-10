import React, {Component} from 'react';
import {Nav, Navbar, Form, Dropdown} from 'react-bootstrap';
import styled from 'styled-components';
import AuthService from './AuthService';


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


const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
    return (
      <li className={liClassName}>
        <a href={props.path} className={aClassName}>
          {props.name}
          {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
        </a>
      </li>
    );
  }

export  class NavigationBar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            stylePath: JSON.parse(localStorage.getItem('stylePath')),
            user: null
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

    handleLogout(){
        this.Auth.logout()
        this.props.history.replace('/login');
    }
    
     
    render(){
        var loginButton = '';
        this.Auth = new AuthService();
        if (this.Auth.loggedIn()) {
          loginButton = <NavItem path="/logout" name="Logout" />
        }else{
          loginButton = <NavItem path="/login" name="Login" />
        }         
        return (
        <Styles>
            <link rel="stylesheet" type="text/css" href={this.state.stylePath} /> 
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/">mnemonic.guru</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <Nav>
                    <NavItem path="/" name="Home" />
                    <NavItem path="/test" name="Lab" />
                    <NavItem path="/about" name="About" />
                    <NavItem path="/contact" name="Contact" />
                    <NavItem path="/protected" name="Protected" />
                    {loginButton}
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
