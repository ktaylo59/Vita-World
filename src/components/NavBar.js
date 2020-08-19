import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


class NavBar extends Component {
    render() {
      return( 
        <Router>
          <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        <Switch>
        
        <Route  exact path="/Main" component={Main} />
            <Route path="/Header" component={Header} />
            <Route path ="/Footer" component={Footer}/>
         </Switch>
        </Router>
       
        );
    }
}
export default NavBar;