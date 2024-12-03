import { render, screen } from '@testing-library/react';
import { AuthContext } from '@/context/store/authContext';
import ProtectedRoute from '@/guard/ProtectedRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('@/config/envs', () => ({
  envs: { BASE_URL: 'https://api.example.com' },
}));

describe('ProtectedRoute Component', () => {
  const mockChildren = <div>Protected Content</div>;

  const renderWithContext = (contextValue: any) =>
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route path="/protected" element={<ProtectedRoute>{mockChildren}</ProtectedRoute>} />
            <Route path="/login" element={<div>Login Page</div>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    );

  it('should render loading message when initializing', () => {
    renderWithContext({
      state: { token: null },
      dispatch: jest.fn(),
      isInitializing: true,
    });

    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('should redirect to /login if there is no token', () => {
    renderWithContext({
      state: { token: null },
      dispatch: jest.fn(),
      isInitializing: false,
    });

    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('should render children if a valid token exists', () => {
    renderWithContext({
      state: { token: 'test-token' },
      dispatch: jest.fn(),
      isInitializing: false,
    });

    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });

  it('should throw an error if the context is not provided', () => {
    const originalConsoleError = console.error;
    console.error = jest.fn();

    expect(() =>
      render(
        <MemoryRouter>
          <ProtectedRoute>{mockChildren}</ProtectedRoute>
        </MemoryRouter>,
      ),
    ).toThrow('useAuth must be used within an AuthProvider');

    console.error = originalConsoleError;
  });
});
