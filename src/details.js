import React, { Component } from 'react'
import getTvShows from './getTvShows.js'
import { Redirect } from 'react-router-dom';

/*export default function Details(props) {
    return (
      <h1>Hello, this will be the details page for each Movie & TV show :) </h1>
    );
  }
*/

export default class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = { shows: [] };
  }
  componentDidMount() {
    let details = this.props.match.params.details;
    let chosenTvShow = getTvShows().find(({ id }) => id === details);
    this.setState({
      shows: chosenTvShow
    });

  }
  render() {
    if (this.state.shows === undefined) {
      return <Redirect to='./not-found'></Redirect>;
    } else {
      return (
        <div className='show-container'>
          <img src={this.state.shows.image}/>
          <div className='show-content'>
          <h1>{this.state.shows.title}</h1>
          <h2>{this.state.shows.synopsis}</h2>
          </div>
        </div>
      );
    }
  }
}




/*
class Details extends Component {
  constructor(props) {
    super(props);
    var message = 'Hello, this will be the details page for each Movie & TV show :) ';
    this.state = { message };
  }
  getData() {
    setTimeout(() => {
      this.setState({
        message: 'Coming soon! :)'
      })
    }, 3000)
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className='message'>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
*/