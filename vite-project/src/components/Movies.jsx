import React, {useEffect, useState} from 'react'
import MoviesCard from './MoviesCard'

function Movies  () {

    const [moviesList, setMoviesList] = useState([])
    
    const getMovies = async (page) => {
        const apiKey = '467e8c63831179f4c835169a5ad0ca81';

        console.log(page)

        const url = `https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=%2010749%2C%2010402%2C%2018&api_key=${apiKey}`;
        fetch(url)
        .then(res => res.json())
        .then(json => setMoviesList(json.results))
    }

    useEffect(() => {
        getMovies()
    }, [])

    console.log(moviesList)
    
 return (
    <div>
        {moviesList.map((movie, index) =>(
        <MoviesCard key={index} {...movie}/>
      ))}
    </div>
 );
}


export default Movies