
import { render, waitFor, screen, fireEvent} from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; 
import "@testing-library/jest-dom";
import React from "react";
import App from "../App.jsx";

global.fetch = () => {
  return Promise.resolve({
    json: () => Promise.resolve({ results: [
        {title: 'Mary Poppins', release_date: '1997'}
    ]})
  })
}

describe("App", () => {

  it("Debería renderizar la película", async () => {
      render(
      <MemoryRouter>
      <App />
      </MemoryRouter>
      );

     await waitFor(() => {
        expect(screen.getByText('Mary Poppins')).toBeInTheDocument();
      })
    });

  it("Debería renderizar el selector de Order by", () => {
    const { getByTestId } = render(<App/>);
    const selectSortBy = getByTestId('sortSelector');

    fireEvent.change(selectSortBy, {target: {value: 'popularity.desc'}});
    expect(selectSortBy.value).toBe('popularity.desc');
  });

  it("Debería renderizar el selector de Filter by genre", () => {
    const { getByTestId } = render(<App/>);
    const selectorFilterBy = getByTestId('filterSelector');

    fireEvent.change(selectorFilterBy, {target: {value: '18'}});
    expect(selectorFilterBy.value).toBe('18');
  });
});
