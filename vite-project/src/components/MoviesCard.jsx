import './MoviesCard.css'
import React from 'react';

const getMoviesPoster = (poster_path) => {
return `https://image.tmdb.org/t/p/w500/${poster_path}`;
}

const MoviesCard = ({poster_path, title, release_date}) =>{

    return <div className="card">
    <img src = {getMoviesPoster(poster_path)} alt={title} className="poster"></img>
    <div className="text">
    <h1 className="title" data-testid="title">{title}</h1>
    <p className="date">{release_date.slice(0,4)}</p>
    </div>
    </div>
}

export default MoviesCard