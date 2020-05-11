import React from 'react'
import Movie from './Movie.js';
import brooklyn from './brooklyn.jpg';
import walkingDead from './WalkingDead.jpg';
import ncis from './ncis.jpg';
import office from './office.jpg';
import supernatural from './supernatural.jpg';
import scrubs from './scrubs.jpg';

export default function TvShows() {

    return (
        <div>
        <div className='Row'>
            <Movie image={supernatural} title='Supernatural' />
            <Movie image={scrubs} title='Scrubs' />
            <Movie image={office} title='The Office' />
        </div>

        <div className='Row'>
            <Movie image={ncis} title='NCIS' />
            <Movie image={walkingDead} title='The Walking Dead' />
            <Movie image={brooklyn} title='Brooklyn 9-9' />
        </div>
        </div>
    );
    
}