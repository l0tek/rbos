import React, {Component} from 'react';
import {NavigationBar} from './components/NavigationBar';

export  class Test extends Component {
    render(){
      return(
        <div>
        <NavigationBar />
         <h1>Hi, I’m a smart component!</h1>
        </div>
      );
    }
  }