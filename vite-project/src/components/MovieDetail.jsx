import React from 'react'
import { Link } from "react-router-dom";

const MovieDetail = () => {
  return (

    <article>
        <Link to={'/'}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQBJREFUaEPtl+EJQjEQg/M20U10E51MR3EUR5GCBXmo9GguRyH9fdeXLzna1w2Lr21x/TBAdYJOwAlMOuARmjRwut0JTFs4uYETCBh4AvAI1A+VqhK4ALgBuAO4DikbLFIAdPFdEhUiG2AvvkOcWeOUCfBLfBuhlgJlZQFIxDcHMgBk4jMApOLZAHLxTIAS8SyAMvEMgFLxBnjfRKUpsO6BMggWQAujBIIJUALBBpBDZABIIbIAZBCZAP8gjgCejAdBNsA3iCUeNHtz+xFLFc/4lYhMwYE1Np8fVYxQBDJca4CwZeQGJ0A2NLydEwhbRm5wAmRDw9s5gbBl5IblE3gB1SUuMTeF2uwAAAAASUVORK5CYII="/>Back to movies list</Link>
        <h1>Título original</h1>
        <h2>Año de lanzamiento</h2>
        <h3>Géneros</h3>
        <h3>Promedio de votos</h3>
        <h3>Votos totales</h3>
        <p>Overview</p>
    </article>
  )
}

export default MovieDetail
