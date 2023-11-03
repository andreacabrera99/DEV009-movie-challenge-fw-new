import React from 'react'

const Filter = ({onFilterByChange, selectedFilter}) => {

  return (
    <select className='selector' data-testid='filterSelector' onChange={onFilterByChange} value={selectedFilter}>
        <option defaultValue>Filter by genre</option>
        <option value="10749">Romance</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="16">Animation</option>
        <option value="12">Adventure</option>
        <option value="14">Fantasy</option>
        <option value="10402">Music</option>
        <option value="10770">TV Movie</option>
    </select>
  )
}

export default Filter