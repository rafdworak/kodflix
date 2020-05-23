import React, { Component } from 'react'
import getTvShows from './getTvShows.js'
import Movie from './Movie.js';



/*export default function Details(props) {
    return (
      <h1>Hello, this will be the details page for each Movie & TV show :) </h1>
    );
  }
*/

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
    let details = this.props.computedMatch.params.details;
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

export default class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = { shows: [] };
  }
  componentDidMount() {
    let details = this.props.match.params.details;
    let chosenTvShow = getTvShows().find(({ id }) => id === details)
    this.setState({
      shows: chosenTvShow
    });
  }
  render() {
    return (
      <div className='message'>
        <h1>Title: {this.state.shows.title}</h1>
      </div>
    );
  }
}
