import React, { Component } from 'react';
import TvShows from './tvshows.js';
import {
  BrowserRouter as Router,
  Route,
 } from "react-router-dom";
import Details from './details.js';
import ShowPage from './details.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         <Route exact path ='/'><TvShows /></Route>
         <Route exact path ='/:details' component = {ShowPage}></Route>
        </div>
      </Router>
    );
  }
}


export default App;
