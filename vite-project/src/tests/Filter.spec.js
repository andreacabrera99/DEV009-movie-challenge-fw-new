import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Filter from "../components/Filter";

let select;
beforeEach(() => {
    render(<Filter/>);
    select = screen.getByTestId('filterSelector');
})
describe('Filter', () => {
    test("Debería renderizar el dropdown list con el className selector", () => {
        expect(select).toBeInTheDocument();
        expect(select).toHaveClass('selector');
    });
    
});