import React, { Component } from 'react';
import {NavigationBar} from './components/NavigationBar';
import AuthService from './components/AuthService';
import { Button } from 'react-bootstrap';
const Auth = new AuthService();


 export class Protected extends Component {

    handleLogout(){
        Auth.logout()
        this.props.history.replace('/login');
    }
    
    render() {
        return (
        <div>
        <NavigationBar />
            <div className="container-fluid pt-3">
            {/* <h2>Welcome {this.props.user.username}</h2> */}
            <Button className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</Button>
        </div>      
        </div>
        );
    }
    }