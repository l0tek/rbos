import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Theme} from './components/Theme';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import {Test} from './Test';

const StoreContext = React.createContext()


class App  extends Component {

  render() {
    return (
    <React.Fragment>
     <StoreContext.Provider value={this.state}>  
    <Theme theme='' />     
     <NavigationBar />
     </StoreContext.Provider>
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/test" component={Test} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
