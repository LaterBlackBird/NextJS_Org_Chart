import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

describe('Home', () => {
  it('should have a title of home', () => {
    render(<Home />);
  
    const title = screen.getByText(/nexient org chart/i)
    expect(title).toBeVisible();
  });
});

