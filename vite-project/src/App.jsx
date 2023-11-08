import React, { useState, useEffect } from "react"
import Movies from "./components/Movies"
import Header from "./components/Header"
import Pagination from "./components/Pagination"
import { useParams } from 'react-router-dom';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [filterBy, setFilterBy] = useState("Romance");

  const getMovies = (page, sortBy, filterBy) => {
    const apiKey = '467e8c63831179f4c835169a5ad0ca81';

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=trues&without_genres=28%2C%2080%2C%2099%2C%2036%2C%2027%2C%209648%2C%20878%2C%2053%2C%2010752%2C%2037&api_key=${apiKey}&page=${page}&sort_by=${sortBy}&with_genres=${filterBy}`;
    fetch(url)
    .then(res => res.json())
    .then(json => setMoviesList(json.results))
  }

const handleSortByChange = (event) => {
  setSortBy(event.target.value);
}

const handleFilterByChange = (event) => {
  setFilterBy(event.target.value);
}

useEffect(() => {
    getMovies(page, sortBy, filterBy);
}, [page, sortBy, filterBy])

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
    .then(json => console.log(json))
  }

  useEffect(() => {
    getMoviesDetails(id);
  }, [id])

  return ( 
    <div>
      <Header selectedSortByValue={sortBy} onSortByChange={handleSortByChange} selectedFilterByValue={filterBy} onFilterByChange={handleFilterByChange}/>
      <Movies moviesList={moviesList}/>  
      <Pagination page={page} setPage={setPage}/>
    </div>
  )
}

export default App
