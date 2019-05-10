import React, { Component } from 'react';
import AuthService from './AuthService';
import { Button, Form } from 'react-bootstrap';
import {Layout} from './Layout';
import {NavigationBar} from './NavigationBar';
import {Jumbotron} from './Jumbotron';


export class Login extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  render() {
      return (
        <React.Fragment>
        <NavigationBar />
            <Jumbotron />
            <Layout> 
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Form onSubmit={this.handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" onChange={this.handleChange} required />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={this.handleChange} required />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
            </Layout>
            </React.Fragment>
      )
  }



  handleChange(e){
    this.setState(
        {
          [e.target.name]: e.target.value
        }
    )
  }

  handleFormSubmit(e){
    e.preventDefault();
    this.Auth.login(this.state.username,this.state.password)
        .then(res =>{
          this.props.history.replace('/');
        })
        .catch(err =>{
            alert(err);
        })
}


}

export default Login;