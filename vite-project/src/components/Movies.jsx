import React, {useEffect, useState} from 'react'
import MoviesCard from './MoviesCard'
import './Movies.css'

function Movies  () {

    const [moviesList, setMoviesList] = useState([])
    
    const getMovies = async (page) => {
        const apiKey = '467e8c63831179f4c835169a5ad0ca81';

        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=%2010749%2C%2035%2C%2010751&api_key=${apiKey}&page=${page}`;
        fetch(url)
        .then(res => res.json())
        .then(json => setMoviesList(json.results))
    }

    useEffect(() => {
        getMovies()
    }, [])

    console.log(moviesList)
    
 return (
    <div className="movieList">
        {moviesList.map((movie, index) =>(
        <MoviesCard key={index} {...movie}/>
      ))}
    </div>
 );
}


export default Movies