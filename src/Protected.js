import React, { Component } from 'react';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import { Button } from 'react-bootstrap';
const Auth = new AuthService();


export class Protected extends Component {

        constructor(props){
            super(props);
        }    

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

const Secure = withAuth(Protected);


export default Secure;