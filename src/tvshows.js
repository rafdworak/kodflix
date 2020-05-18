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

        /*  <div className='container'>
              <Movie image={supernatural} title='Supernatural' />
              <Movie image={scrubs} title='Scrubs' />
              <Movie image={office} title='The Office' />
              <Movie image={ncis} title='NCIS' />
              <Movie image={walkingDead} title='The Walking Dead' />
              <Movie image={brooklyn} title='Brooklyn 9-9' />
          </div> */
        <div className='container'>{
            getTvShows().map(movie => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    image={movie.image}
                    title={movie.title} />
            ))
        }</div>

    );

}

function getTvShows() {
    return [
        { title: 'Supernatural', image: supernatural, id: 'supernatural' },
        { title: 'Scrubs', image: scrubs, id: 'scrubs' },
        { title: 'The Office', image: office, id: 'theoffice' },
        { title: 'NCIS', image: ncis, id: 'ncis' },
        { title: 'The Walking Dead', image: walkingDead, id: 'walkingdead' },
        { title: 'Brooklyn 9-9', image: brooklyn, id: 'brooklyn' }

    ];
}