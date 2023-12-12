import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import './MovieDetail.css'
import Header from './Header'

export const getMoviesPoster = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500/${poster_path}`;
}

export const MovieDetail = () => {

  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  const getMoviesDetails = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjdlOGM2MzgzMTE3OWY0YzgzNTE2OWE1YWQwY2E4MSIsInN1YiI6IjY1MmQ3NjY0NjYxMWI0MDBhY2JhYTRjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pbrzX5EeYl5UvU9mfcETFoEE_D7apvgpwdpAG5bgG7A'
      }
    };
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setMovieDetail(json)
      })
      
  }

  useEffect(() => {
    getMoviesDetails(id);
  }, [id])

  console.log(movieDetail);
  return (
    <>
    <Header showSelectors={false}/>
    <article className='movieDetails'>
      {movieDetail !== undefined ? (<> <div className='head'>
        <img src={getMoviesPoster(movieDetail.poster_path)} alt={movieDetail.original_title} className="moviePoster"></img>
        </div>
        <div className='detailContainer'>
        <h1 className='movieTitle'>{movieDetail.original_title}</h1>
        <h2 className='tagline'>{movieDetail.tagline}</h2>
        <h2 className='movieReleaseDate'>Release year: {movieDetail.release_date.slice(0, 4)}</h2>
        <div className='genres'>
          <ul>
          Genres:{movieDetail.genres.map(genre => (<li key={genre.id}>{genre.name}</li>)) }
          </ul>
          </div>
        <div className='votes'>
        <h3 className='voteAverage'>Vote average: {movieDetail.vote_average} /10 ⭐️</h3>
        <h3 className='voteCount'>Total votes: {movieDetail.vote_count}</h3>
        </div>
        <h1 className='movieOverview'>Overview:</h1>
        <p className='overview'>{movieDetail.overview}</p></div></>) : <span>Loading movie</span>}
    </article>
    </>
  )
}

export default MovieDetail
