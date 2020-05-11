
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import React from 'react'


export default function Movie(props) {
    return (
      <Router>
      <Link to={`${props.title}`} className='card'><img src={props.image}/>
      <div className='overlay'>{props.title}</div></Link>
      </Router>
    );
  }