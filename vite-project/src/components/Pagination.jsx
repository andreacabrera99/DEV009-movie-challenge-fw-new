import React, {useEffect} from 'react'
import './Pagination.css'

const Pagination = ({page, setPage}) => {

  const handlePreviousClick = () => {
    if(page===1){
      setPage(1)
    } else{
      setPage(page-1)
      window.scrollTo(0, 0);
    }
  }

  const handleNextClick = () => {
    setPage(page+1)
    window.scrollTo(0, 0);
  }

  const handleFirstPageClick = () => {
    setPage(1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className='container'>
    <div className="pagination">
    <button className="button" data-testid="firstPageButton" onClick={handleFirstPageClick}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYxJREFUaEPtmO2uwjAIhtmd6ZWpV6Z3psOsSVNL95aP6mL3x+SEwftAy4EtdPBnObh+mgDfrmBkBU5EdCEi/r2toNcI2CgAFsvi8ycEIgKgJj6BuEN4A7TEh0B4AiDi3SG8ACTxfGT4Ke8D/83lOHkAtMSnzoPYqJqUFaBHWI8tDGMB0AjSvNOE0QJYhFje/YDRAHgI8PDxhukFcAu8jRbm7tQD4Ck+HQWzTxTAHKhxE02+EQBTALAfqmPsAagdg8JzM1WsFoDKoUI4AnFe94pHzXcL4L4tI+EzfSGsljgWzxBd/weehbXL8AVWqAZRTXarAiXA3n0BtcFmUPwJAOez33BoBfIvEIhU5D4NBSiDIRBsI7bHdYsbBtCzC5dgYnscCaDNfoKRGsmwCkCBstSj9pCdRxuFAk0AYfmaFUC7xTxC8wjJXzBmFxLmDigxf9WF0AEtyq57I6vtxFHi9vyK43frCPGMzxC/8Ig6kT3XMi5b4Xnc5uxXP6mwcwTAKiL0/QkQml7A+eEr8AK68YQxyCMe5QAAAABJRU5ErkJggg==" className='home'/></button>
    <button className="button" data-testid="prevButton" onClick={handlePreviousClick}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQBJREFUaEPtl+EJQjEQg/M20U10E51MR3EUR5GCBXmo9GguRyH9fdeXLzna1w2Lr21x/TBAdYJOwAlMOuARmjRwut0JTFs4uYETCBh4AvAI1A+VqhK4ALgBuAO4DikbLFIAdPFdEhUiG2AvvkOcWeOUCfBLfBuhlgJlZQFIxDcHMgBk4jMApOLZAHLxTIAS8SyAMvEMgFLxBnjfRKUpsO6BMggWQAujBIIJUALBBpBDZABIIbIAZBCZAP8gjgCejAdBNsA3iCUeNHtz+xFLFc/4lYhMwYE1Np8fVYxQBDJca4CwZeQGJ0A2NLydEwhbRm5wAmRDw9s5gbBl5IblE3gB1SUuMTeF2uwAAAAASUVORK5CYII=" className="arrow"/></button>
    <button className="button" >{page}</button>
    <button className="button" data-testid="nextButton" onClick={handleNextClick}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAPdJREFUaEPtl8EJAlEMRGc7sRQ7USvTTrQTLUVyWNjDCoHkRRbmn/aQhHkzH7J/0cHPcnD9MsC/E3QCTqDogK9Q0cByuxMoW1gc4AR+GHiW9Cqam2onEnhIuki6SYpv9HQDrOJX0ThEJ0Bcm+eO3ShEJ0Bov0q6T0J0A4xDEACjEBTAGAQJMAJBA+AQEwAoxBQABmGA5I8OtuAmEsDEh3k0ACqeBsDFkwAj4imAMfEEwKj4boCTpPfkW6AbYG/boq8xAmALgYunAGJuXKdPckuXyuhFVhKXaTZAxiWyxgmQ7mZmO4GMS2SNEyDdzcx2AhmXyJrDJ/AF7R4uMZuOMGYAAAAASUVORK5CYII=" className="arrow"/></button>
    </div>
    </div>
  )
}

export default Pagination
