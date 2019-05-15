import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Test} from './Test';
import {Protected} from './Protected';
import {Login} from './components/Login';
import {Logout} from './components/Logout';
import withAuth from './components/withAuth';




class App  extends Component {

  constructor(props) {
    super(props);
    this.prefix = process.env.PUBLIC_URL || '';
    const isLocalhost = Boolean(
      window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );
  
  }

  render() {
    return (
          <Router basename={'localhost/rbos/'}>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
              <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
              <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
              <Route path={`${process.env.PUBLIC_URL}/test`} component={Test} />
              <Route path={`${process.env.PUBLIC_URL}/protected`} component={withAuth(Protected)} />
              <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route path={`${process.env.PUBLIC_URL}/logout`} component={Logout} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
    );
  }
}

export default App;
