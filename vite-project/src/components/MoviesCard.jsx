const getMoviesPoster = (poster_path) => {
return `https://image.tmdb.org/t/p/w500/${poster_path}`;
}

const MoviesCard = ({poster_path, title, release_date}) =>{
    return <div className="cards">
        <img src = {getMoviesPoster(poster_path)} alt={title} className="poster"></img>
        <div className="text">
        <h1 className="title">{title}</h1>
        <p className="date">{release_date}</p>
        </div>
    </div>
}

export default MoviesCard