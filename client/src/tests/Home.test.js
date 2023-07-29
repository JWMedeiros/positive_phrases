import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Homecd';

test('renders home component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Email Scheduler/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders sign up button', () => {
  render(<Home />);
  const signUpButton = screen.getByRole('button', { name: /Sign Up/i });
  expect(signUpButton).toBeInTheDocument();
});
