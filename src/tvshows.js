import React from 'react'
import Movie from './Movie.js';
import getTvShows from './getTvShows.js';

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
