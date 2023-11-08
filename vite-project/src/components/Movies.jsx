import React from 'react';
import MoviesCard from './MoviesCard'
import './Movies.css'

function Movies  ({moviesList}) {

 return (
    <div>
    <div className="movieList">
        {moviesList.map((movie) =>(
        <MoviesCard key={movie.id} id={movie.id} {...movie}/>
      ))}
    </div>
    </div>
 );
}


export default Movies