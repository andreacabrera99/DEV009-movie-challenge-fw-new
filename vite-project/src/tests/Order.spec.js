import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Order from "../components/Order";

let dropdown;
beforeEach(() => {
    render(<Order/>);
    dropdown = screen.getByTestId('sortSelector');
})
describe('Order', () => {
    test("Debería renderizar el dropdown list con cinco opciones", () => {
        expect(dropdown).toBeInTheDocument();
        expect(dropdown.length).toBe(5);
    });
});