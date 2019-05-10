import React, {Component} from 'react';
import AuthService from './AuthService';
import {Layout} from './Layout';
import {NavigationBar} from './NavigationBar';
import {Jumbotron} from './Jumbotron';

export class Logout extends Component {
    constructor(){
      super();  
      this.Auth = new AuthService();
      this.Auth.logout();
    }
    render(){
        return (   
        <React.Fragment>
        <NavigationBar />
            <Jumbotron />
                <Layout>               
                    <h1>Sie haben sich erfolgreich abgemeldet!</h1>
                </Layout>
            </React.Fragment>
        )
      }


}