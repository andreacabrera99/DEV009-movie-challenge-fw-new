// import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
    test('Debería renderizar el título del header', () => {
        render(<Header/>);
        const header = screen.getAllByText('Moviebox');
        expect(header).toBeInTheDocument();
    });

    test('Debería renderizar el logo del header', () => {
        render(<Header/>);
        const logo = screen.getAllByAltText('logo');
        expect(logo).toBeInTheDocument();
    });
});