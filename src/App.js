import React from 'react';
import DieHard from './die_hard.jpg';
import brooklyn from './brooklyn.jpg';
import WalkingDead from './WalkingDead.jpg';
import ncis from './ncis.jpg';
import office from './office.jpg';
import supernatural from './supernatural.jpg';
import scrubs from './scrubs.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Movie">Favourite Movie!</header>
      <img src={DieHard} alt='Die Hard' />
      <header className='Shows'> TV Shows</header>
      <div className='Row'>
        <div className='First'><h2>Supernatural</h2></div>
        <div className='Second'><h2>Scrubs</h2></div>
        <div className='Third'><h2>The Office</h2> </div>
      </div>
      <div className='Row'>
        <div className='First'><h2>NCIS</h2></div>
        <div className='Second'><h2>The Walking Dead</h2></div>
        <div className='Third'><h2>Brooklyn 9-9</h2> </div>
      </div>

      <div className='Row'>
        <div className='item'><img src={supernatural} /></div>
        <div className='item'><img src={scrubs} /></div>
        <div className='item'><img src={office} /></div>
      </div>
      <div className='Row'>
        <div className='item'><img src={ncis} /></div>
        <div className='item'><img src={WalkingDead} /></div>
        <div className='item'><img src={brooklyn} /></div>
      </div>

    </div>
  );
}

export default App;
