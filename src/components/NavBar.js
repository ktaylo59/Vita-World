import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


class NavBar extends Component {
    render() {
      return( 
        <Router>
          <div>
           <nav>
            <ul>
              <li>
                 <Link className='navBar' to = "/Main"></Link>
              </li>
               <li>
                 <Link className="navBar" to ="/Header"></Link>
               </li>
               <li>
                 <Link className="navBar" to ="/Footer"></Link>
              </li>

            </ul>
          </nav>
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