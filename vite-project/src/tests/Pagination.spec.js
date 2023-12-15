import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Pagination from "../components/Pagination";


describe("Pagination", () => {
    test("Debería renderizar los botones del componente pagination", () => {
        render(<Pagination/>);
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(4);
    });

    test("Debería disminuir la página cuando se dé click al botón previous", () => {
        let page= 2;
        const setPage = newPage => {
            page = newPage;
        };

        const { getByTestId } = render(<Pagination page= {page} setPage= {setPage}/>);

        fireEvent.click(getByTestId('prevButton'));
        expect(page).toBe(1);
    });

    test("Debería aumentar la página cuando se dé click al botón next", () => {
        let page= 2;
        const setPage = newPage => {
            page = newPage; 
        };

        const { getByTestId } = render(<Pagination page={page} setPage={setPage}/>);

        fireEvent.click(getByTestId('nextButton'));
        expect(page).toBe(3);
    });

    test("Debería permanecer en la página 1 si se le da click al botón previous", () => {
        let page=1;
        const setPage = newPage => {
            page = newPage;
        };

        const { getByTestId } = render(<Pagination page={page} setPage={setPage}/>);

        fireEvent.click(getByTestId('prevButton'));
        expect(page).toBe(1);
    });
   
    test("Debería regresar a la página 1 si le da click al botón home", () => {
        let page=3;
        const setPage = newPage => {
            page = newPage;
        };

        const { getByTestId } = render(<Pagination page={page} setPage={setPage}/>);

        fireEvent.click(getByTestId('firstPageButton'));
        expect(page).toBe(1);
    });
})