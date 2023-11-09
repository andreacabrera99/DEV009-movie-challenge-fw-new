import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MovieDetail from '../components/MovieDetail';
import "@testing-library/jest-dom";
import { getMoviesPoster } from '../components/MovieDetail';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; 

global.fetch = () => {
    return Promise.resolve({
        json: () => Promise.resolve(  
            { original_title: 'Coco', release_date: '2017',  genres: [{ 'id': 35, 'name': 'Comedy' }], }
        )
    })
}

describe('MovieDetail', () => {
    it('Debería renderizar los detalles de la película',  () => {
        render(<MovieDetail/>)
         waitFor(() => {
            expect(screen.getByText('Coco')).toBeInTheDocument();
        });
    });
    it('Debería renderizar el póster de la película', () => {
        const posterPath = 'poster_coco.jpg';
        const { getByText } = render(<div>{getMoviesPoster(posterPath)}</div>);
        expect(getByText(`https://image.tmdb.org/t/p/w500/${posterPath}`)).toBeInTheDocument();
    });
    it('Debería renderizar "Loading movie" cuando no se proporcionan detalles de la película', () => {
        render(<MovieDetail />);
        expect(screen.getByText('Loading movie')).toBeInTheDocument();
      });
      
    it('Debería renderizar los géneros de las películas', async () => {

        render(
            <MemoryRouter initialEntries={['/detail/1']}>
                <Routes>
                  <Route path="/detail/:id" element={<MovieDetail />}/>
                </Routes>
              </MemoryRouter>
            );

            screen.debug();
        await waitFor(()=> {
            expect(screen.getByText('Comedy')).toBeInTheDocument();
        })
      });

});


