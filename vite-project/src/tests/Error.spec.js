import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Error from "../components/Error";
import { MemoryRouter, Route, createBrowserRouter, Routes } from "react-router-dom";

let backButton;
beforeEach(()=> {

    render(
    <MemoryRouter initialEntries={['/']}>
    <Routes>
    <Route path="/" element={<Error />}>
    </Route>
    </Routes>
    </MemoryRouter>
    );
    backButton = screen.getByTestId('backLink');
})
describe('Error', () => {
    test('Debería renderizar el link de react router para volver a la página principal', () => {
        expect(backButton).toBeInTheDocument();
    })
})