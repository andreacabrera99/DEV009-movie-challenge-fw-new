import React, { useState, useEffect } from "react"
import Movies from "./components/Movies"
import Header from "./components/Header"
import Pagination from "./components/Pagination"

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


  return ( 
    <div>
      <Header selectedSortByValue={sortBy} onSortByChange={handleSortByChange} selectedFilterByValue={filterBy} onFilterByChange={handleFilterByChange} showSelectors={true}/>
      <Movies moviesList={moviesList}/>  
      <Pagination page={page} setPage={setPage}/>
    </div>
  )
}

export default App
