import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

let header;
let logo;
let headerContainer;
beforeEach(() =>{
    render(<Header/>);
    header = screen.getAllByText('Moviebox');
    logo = screen.getAllByAltText('logo');
    headerContainer = screen.getByTestId('header');
})
describe('Header', () => {
    test('Debería renderizar el título del header', () => {
        expect(header).toBeInTheDocument();
    });

    test('Debería renderizar el logo del header', () => {
        expect(logo).toBeInTheDocument();
    });

    test('Debería renderizar el logo del header', () => {
        expect(logo).toHaveStyle({
            backgroundColor: '#031D1E'
        })
    });

    test('Debería tener el className header', () => {
        expect(headerContainer).toHaveClass('header');
    })
});