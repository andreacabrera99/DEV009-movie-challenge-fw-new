import React from 'react'

const Filter = () => {
  return (
    <select className='selector'>
        <option disabled selected>Filter by</option>
        <option value={"romance"}>Romance</option>
        <option value={"comedy"}>Comedy</option>
        <option value={"drama"}>Drama</option>
        <option value={"family"}>Family</option>
        <option value={"animation"}>Animation</option>
    </select>
  )
}

export default Filter