import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUpForm from '../components/SignUpForm';

test('renders sign up form', () => {
  render(<SignUpForm />);
  const formElement = screen.getByRole('form');
  expect(formElement).toBeInTheDocument();

  // Use the correct "for" attribute values in the queries
  const usernameInput = screen.getByLabelText('Username:');
  const passwordInput = screen.getByLabelText('Password:');
  const emailInput = screen.getByLabelText('Email Address:');
  const submitButton = screen.getByRole('button', { name: /Sign Up/i });

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('sign up form submission', () => {
  render(<SignUpForm />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText('Username:'), {
    target: { value: 'testuser' },
  });
  fireEvent.change(screen.getByLabelText('Password:'), {
    target: { value: 'testpassword' },
  });
  fireEvent.change(screen.getByLabelText('Email Address:'), {
    target: { value: 'test@example.com' },
  });

  // Simulate form submission
  const submitButton = screen.getByRole('button', { name: /Sign Up/i });
  fireEvent.click(submitButton);

  // Add your expectations for form submission behavior
});
