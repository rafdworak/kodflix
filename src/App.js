import React, { Component } from 'react';
import TvShows from './tvshows.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
 } from "react-router-dom";
import Details from './details.js';
import ShowPage from './details.js';
import NotFound from './NotFound.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
         <Route exact path ='/'><TvShows /></Route>
         <Route exact path ='/not-found' component = {NotFound}></Route>

         <Route exact path ='/:details' component = {ShowPage}></Route>
         </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
