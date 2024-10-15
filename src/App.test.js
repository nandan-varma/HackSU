import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react';
import App from './App';

// TODO : trying to test the routes but tbh i have no idea what i'm doing

test('renders Home component for default route', () => {
  act(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

test('renders Theme component for /theme route', () => {
  act(() => {
    render(
      <MemoryRouter initialEntries={['/theme']}>
        <App />
      </MemoryRouter>
    );
  });
  expect(screen.getByText(/Theme/i)).toBeInTheDocument();
});

test('renders About component for /about route', () => {
  act(() => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
  });
  expect(screen.getByText(/About Us!/i)).toBeInTheDocument();
});

test('renders Faq component for /faq route', () => {
  act(() => {
    render(
      <MemoryRouter initialEntries={['/faq']}>
        <App />
      </MemoryRouter>
    );
  });
});