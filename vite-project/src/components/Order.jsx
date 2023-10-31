import React, { useState } from 'react'
import './Order.css'

const Order = () => {

  return (
    <select className='selector'>
    <option disabled selected>Order by</option>
    <option value={"popularity"}>Popularity asc</option>
    <option value={"popularity"}>Popularity desc</option>
    <option value={"release"}>Release date asc</option>
    <option value={"release"}>Release date desc</option>
|||</select>
  )
}

export default Order
