import React from 'react'
import { Link } from "react-router-dom";

const getMoviesPoster = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  }

const MovieDetail = ({poster_path, original_title, release_date, genres, vote_average, vote_count, overview}) => {

  return (

    <article className='details'>
        <Link to={'/'}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQBJREFUaEPtl+EJQjEQg/M20U10E51MR3EUR5GCBXmo9GguRyH9fdeXLzna1w2Lr21x/TBAdYJOwAlMOuARmjRwut0JTFs4uYETCBh4AvAI1A+VqhK4ALgBuAO4DikbLFIAdPFdEhUiG2AvvkOcWeOUCfBLfBuhlgJlZQFIxDcHMgBk4jMApOLZAHLxTIAS8SyAMvEMgFLxBnjfRKUpsO6BMggWQAujBIIJUALBBpBDZABIIbIAZBCZAP8gjgCejAdBNsA3iCUeNHtz+xFLFc/4lYhMwYE1Np8fVYxQBDJca4CwZeQGJ0A2NLydEwhbRm5wAmRDw9s5gbBl5IblE3gB1SUuMTeF2uwAAAAASUVORK5CYII="/>Back to movies list</Link>
        <img src = {getMoviesPoster(poster_path)} alt={original_title} className="moviePoster"></img>
        <h1 className='movieTitle'>{original_title}</h1>
        <h2 className='movieReleaseDate'>{release_date}</h2>
        <h3 className='genres'>{genres}</h3>
        <h3 className='voteAverage'>{vote_average}/10 ⭐️</h3>
        <h3 className='voteCount'>{vote_count}</h3>
        <p className='overview'>{overview}</p>
    </article>
  )
}

export default MovieDetail
