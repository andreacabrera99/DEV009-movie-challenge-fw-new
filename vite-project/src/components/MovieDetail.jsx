import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import './MovieDetail.css'
import Header from './Header'

const getMoviesPoster = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500/${poster_path}`;
}

const MovieDetail = () => {

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


const handleCloseTab = () => {
  window.close();
};
  return (
    <>
    <Header showSelectors={false}/>
    <article className='movieDetails'>
      {movieDetail !== undefined ? (<> <div className='head'><div onClick={handleCloseTab} className='backButton'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQBJREFUaEPtl+EJQjEQg/M20U10E51MR3EUR5GCBXmo9GguRyH9fdeXLzna1w2Lr21x/TBAdYJOwAlMOuARmjRwut0JTFs4uYETCBh4AvAI1A+VqhK4ALgBuAO4DikbLFIAdPFdEhUiG2AvvkOcWeOUCfBLfBuhlgJlZQFIxDcHMgBk4jMApOLZAHLxTIAS8SyAMvEMgFLxBnjfRKUpsO6BMggWQAujBIIJUALBBpBDZABIIbIAZBCZAP8gjgCejAdBNsA3iCUeNHtz+xFLFc/4lYhMwYE1Np8fVYxQBDJca4CwZeQGJ0A2NLydEwhbRm5wAmRDw9s5gbBl5IblE3gB1SUuMTeF2uwAAAAASUVORK5CYII="  className='backImage'/>Back to movies list</div>
        <img src={getMoviesPoster(movieDetail.poster_path)} alt={movieDetail.original_title} className="moviePoster"></img>
        </div>
        <div className='detailContainer'>
        <h1 className='movieTitle'>{movieDetail.original_title}</h1>
        <h2 className='movieReleaseDate'>Release year: {movieDetail.release_date.slice(0, 4)}</h2>
        <div className='genres'><ul>Genres:{movieDetail.genres.map(genre => (<li>{genre.name}</li>)) }</ul></div>
        <div className='votes'>
        <h3 className='voteAverage'>Vote average: {movieDetail.vote_average} /10 ★</h3>
        <h3 className='voteCount'>Total votes: {movieDetail.vote_count}</h3>
        </div>
        <h1 className='movieOverview'>Overview:</h1>
        <p className='overview'>{movieDetail.overview}</p></div></>) : <span>Loading movie</span>}
    </article>
    </>
  )
}

export default MovieDetail
