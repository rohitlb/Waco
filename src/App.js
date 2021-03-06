// modules
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';



// Components
import ScrollToTop from "./ScrollToTop";
import {Waco} from './Waco/Waco'
import Contact from "./Waco/Waco_contact";
import { About } from "./Waco/About/About";
class App extends Component {
  render() {
      return (
          <BrowserRouter>
      <ScrollToTop />             
                  <Switch>
                  <Route path="/" component={Waco} exact/>
                  <Route path="/about" component={About} />
                  <Route  path="/contact" component={Contact} />
                  <Route path="/Waco" component={Waco}   />
                 
                  </Switch>
          </BrowserRouter>
            
      );
  }
}

export default App;
