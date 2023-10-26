
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "../App.jsx"

global.fetch = () => {
  return Promise.resolve({
    json: () => Promise.resolve({ results: [
        {title: 'Mary Poppins', release_date: '1997'}
    ]})
  })
}

describe("App", () => {

  it("should render App", async () => {
      render(<App />);

     await waitFor(() => {
        expect(screen.getByText('Mary Poppins')).toBeInTheDocument();
      })
    });
});
