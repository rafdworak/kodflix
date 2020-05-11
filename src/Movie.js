import React from 'react'

export default function Movie(props) {
    return (
      <div className='card'><img src={props.image}/>
      <div className='overlay'>{props.title}</div></div>
  
    );
  }