import React from 'react'
import { useRouteError } from 'react-router-dom'
import './Error.css'
import { Link } from "react-router-dom";

const Error = () => {

    const error = useRouteError ();
  return (
    <div className='errorContainer'>
    <h1 className='errorTitle'>Error</h1>
    <p className='errorContent'>{error.statusText || error.message}</p>
    <Link to={'/'} className='backLink'>Back to movies list</Link>
    </div>
  )
}

export default Error