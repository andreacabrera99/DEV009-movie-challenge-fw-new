import React from 'react'
import './Pagination.css'

const Pagination = ({page, setPage}) => {

  const previousClick = () => {
    if(page===1){
      setPage(1)
    } else{
      setPage(page-1)
    }
  }

  const nextClick = () => {
    setPage(page+1)
  }

  return (
    <div className="pagination">
    <button className="button" data-testid="prevButton" onClick={previousClick}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQBJREFUaEPtl+EJQjEQg/M20U10E51MR3EUR5GCBXmo9GguRyH9fdeXLzna1w2Lr21x/TBAdYJOwAlMOuARmjRwut0JTFs4uYETCBh4AvAI1A+VqhK4ALgBuAO4DikbLFIAdPFdEhUiG2AvvkOcWeOUCfBLfBuhlgJlZQFIxDcHMgBk4jMApOLZAHLxTIAS8SyAMvEMgFLxBnjfRKUpsO6BMggWQAujBIIJUALBBpBDZABIIbIAZBCZAP8gjgCejAdBNsA3iCUeNHtz+xFLFc/4lYhMwYE1Np8fVYxQBDJca4CwZeQGJ0A2NLydEwhbRm5wAmRDw9s5gbBl5IblE3gB1SUuMTeF2uwAAAAASUVORK5CYII=" className="arrow"/></button>
    <button className="button" >{page}</button>
    <button className="button" data-testid="nextButton" onClick={nextClick}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAPdJREFUaEPtl8EJAlEMRGc7sRQ7USvTTrQTLUVyWNjDCoHkRRbmn/aQhHkzH7J/0cHPcnD9MsC/E3QCTqDogK9Q0cByuxMoW1gc4AR+GHiW9Cqam2onEnhIuki6SYpv9HQDrOJX0ThEJ0Bcm+eO3ShEJ0Bov0q6T0J0A4xDEACjEBTAGAQJMAJBA+AQEwAoxBQABmGA5I8OtuAmEsDEh3k0ACqeBsDFkwAj4imAMfEEwKj4boCTpPfkW6AbYG/boq8xAmALgYunAGJuXKdPckuXyuhFVhKXaTZAxiWyxgmQ7mZmO4GMS2SNEyDdzcx2AhmXyJrDJ/AF7R4uMZuOMGYAAAAASUVORK5CYII=" className="arrow"/></button>
    </div>
  )
}

export default Pagination
