import React from 'react';
import DieHard from './die_hard.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Movie">Favourite Movie!</header>
      <img src= {DieHard} alt='Die Hard'/>
      <header className = 'Shows'> TV Shows</header>
      <div className='Row'> 
            <div className = 'First'><h2>Supernatural</h2></div>
            <div className = 'Second'><h2>Scrubs</h2></div> 
            <div className = 'Third'><h2>The Office</h2> </div> 
      </div>  
      <div className='Row'> 
            <div className = 'First'><h2>NCIS</h2></div>
            <div className = 'Second'><h2>The Walking Dead</h2></div> 
            <div className = 'Third'><h2>Brooklyn 9-9</h2> </div> 
      </div>  


    </div>
  );
}

export default App;
