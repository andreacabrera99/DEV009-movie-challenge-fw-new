import './MoviesCard.css'
import React from 'react';
import { Link } from "react-router-dom";

const getMoviesPoster = (poster_path) => {
return `https://image.tmdb.org/t/p/w500/${poster_path}`;
}

const MoviesCard = ({poster_path, title, release_date, id}) =>{
    const formattedDate = release_date ? release_date.slice(0, 4) : 'No release date';


    return (
    <div className="card">
    <img src = {getMoviesPoster(poster_path)} alt={title} className="poster"></img>
    <div className="text">
    <div>
    <h1 className="title" data-testid="title">{title}</h1>
    <p className="date">{formattedDate}</p>
    </div>
    <Link to={`/detail/${id}`} target="_blank" rel="noopener noreferrer" className='details'>See more</Link>
    </div>
    </div>
)}

export default MoviesCard