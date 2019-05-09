import React, {Component} from 'react';

export  class Theme extends Component {
    render(){
      return <link rel="stylesheet" href={`${process.env.PUBLIC_URL}/styles/${this.props.theme === 'flat' ? 'bootstrap-flatly.min.css' : 'bootstrap-darkly.min.css'}`} /> 
    }
  }