import React from 'react'
import './Order.css'

const Order = ({onSortByChange, selectedValue}) => {

  return (
    <div>
    <select className='selector' data-testid='sortSelector' onChange={onSortByChange} value={selectedValue}>
    <option defaultValue>Order by</option>
    <option value="popularity.asc">Less popular</option>
    <option value="popularity.desc">Most popular</option>
    <option value="release_date.asc">Oldest</option>
    <option value="release_date.desc">Newest</option>
  </select>
  </div>
  )
}

export default Order
