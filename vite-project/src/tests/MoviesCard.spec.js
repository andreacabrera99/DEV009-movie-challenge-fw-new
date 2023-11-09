import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MoviesCard from '../components/MoviesCard';
import { MemoryRouter } from 'react-router-dom'; 

describe('MoviesCard', ()=>{
    const movies = {
        title: 'Hercules',
        release_date: '1997-05-03',
        poster_path: 'movie-poster.jpg'
}
    test('Debería renderizar el título de la película', ()=>{
        render(
        <MemoryRouter>
        <MoviesCard {...movies}/>
        </MemoryRouter>
        );
        const movieTitle = screen.getByText('Hercules');
        expect(movieTitle).toBeInTheDocument();
    });

    test('Debería renderizar el año de la película', () => {
        render(
        <MemoryRouter>
        <MoviesCard {...movies}/>
        </MemoryRouter>
        );
        const releaseDate = screen.getByText(1997);
        expect(releaseDate).toBeInTheDocument();
    });

    test('Debería renderizar el póster de la película', () => {
        render(
        <MemoryRouter>
        <MoviesCard {...movies}/>
        </MemoryRouter>
        );
        const poster = screen.getByRole('img');
        expect(poster).toBeInTheDocument();
        expect(poster).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/movie-poster.jpg');
    });
})