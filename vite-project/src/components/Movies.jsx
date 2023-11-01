import MoviesCard from './MoviesCard'
import './Movies.css'

function Movies  ({moviesList}) {

 return (
    <div>
    <div className="movieList">
        {moviesList.map((movie, index) =>(
        <MoviesCard key={index} {...movie}/>
      ))}
    </div>
    </div>
 );
}


export default Movies