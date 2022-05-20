import React from "react";
import { render, screen } from "./test-utils";
import Home from '../pages/index';
import Sidebar from '../components/molecules/Sidebar'

describe('Home', () => {
  it('should have a title of home', () => {
    render(<Home />);
  
    const title = screen.getByText(/home/i);
    expect(title).toBeVisible();
  });
});