import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Test} from './Test';
import {Login} from './components/Login';
import {Logout} from './components/Logout';

class App  extends Component {

  render() {
    return (
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/test" component={Test} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
    );
  }
}

export default App;
