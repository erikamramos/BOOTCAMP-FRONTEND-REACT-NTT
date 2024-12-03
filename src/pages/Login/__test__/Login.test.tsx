import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import LoginPage from '@/pages/Login';
import { AppRoutes } from '@/router/AppRoutes';
import { authMock, loginMock } from '@/utils/__mocks__/user';

jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));

describe('LoginPage Component', () => {
  const mockLoginUser = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useAuth as jest.Mock).mockReturnValue({
      ...authMock,
      loginUser: mockLoginUser,
    });

    jest.spyOn(console, 'error').mockImplementation(() => {}); // Silenciar console.error temporalmente
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const renderComponent = () =>
    render(
      <MemoryRouter initialEntries={[AppRoutes.LOGIN]}>
        <Routes>
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.HOME} element={<div>Home Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

  it('should show validation errors if the form is submitted empty', () => {
    renderComponent();

    fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));

    const errorMessages = screen.getAllByText('Este campo es obligatorio');
    expect(errorMessages).toHaveLength(2); // Verifica que hay errores para ambos campos
  });

  it('should call loginUser with correct data', async () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText('Usuario'), { target: { value: loginMock.username } });
    fireEvent.change(screen.getByLabelText('Contraseña'), {
      target: { value: loginMock.password },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));

    await waitFor(() =>
      expect(mockLoginUser).toHaveBeenCalledWith({
        username: loginMock.username,
        password: loginMock.password,
      }),
    );
  });

  it('should navigate to the home page after successful login', async () => {
    mockLoginUser.mockResolvedValueOnce(undefined); // Simular login exitoso

    renderComponent();

    fireEvent.change(screen.getByLabelText('Usuario'), { target: { value: loginMock.username } });
    fireEvent.change(screen.getByLabelText('Contraseña'), {
      target: { value: loginMock.password },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));

    await waitFor(() => expect(screen.getByText('Home Page')).toBeInTheDocument());
  });

  it('should show an error message for failed login', async () => {
    mockLoginUser.mockRejectedValueOnce(new Error('Invalid credentials'));

    renderComponent();

    fireEvent.change(screen.getByLabelText('Usuario'), { target: { value: 'wronguser' } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));

    await waitFor(() =>
      expect(screen.getByText('Usuario y/o contraseña incorrectos')).toBeInTheDocument(),
    );
  });
});
