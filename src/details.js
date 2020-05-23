import React, { Component } from 'react'


/*export default function Details(props) {
    return (
      <h1>Hello, this will be the details page for each Movie & TV show :) </h1>
    );
  }
*/

export default class Details extends Component {
  constructor(props) {
    super(props);
    var message = 'Hello, this will be the details page for each Movie & TV show :)';
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