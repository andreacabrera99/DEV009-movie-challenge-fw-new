import React, {useEffect, useState} from 'react'
import MoviesCard from './MoviesCard'

function Movies  () {

    const [moviesList, setMoviesList] = useState([])

    const getMovies = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=467e8c63831179f4c835169a5ad0ca81')
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
 )
}

export default Movies