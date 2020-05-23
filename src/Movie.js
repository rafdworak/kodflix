import {
  Link
} from "react-router-dom";
import React from 'react'


export default function Movie(props) {
  return (

    //<Link to={`${props.title}`} className='card'><img src={props.image}/>

    <Link to={`${props.id}`} className='card'><img src={props.image} />
      <div className='overlay'>{props.title}</div></Link>

  );
}