import { login, logout, loadUserFromStorage, setUser } from '@/context/actions/authActions';
import { fetchAuth } from '@/services/api/authServices';
import { LoginPayload, User } from '@/models/auth';
import { loginMock, UserMock } from '@/utils/__mocks__/user';

jest.mock('@/services/api/authServices', () => ({
  fetchAuth: jest.fn(),
}));

describe('authActions', () => {
  const mockDispatch = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  describe('login', () => {
    it('should call fetchAuth, set localStorage, and dispatch LOGIN_SUCCESS', async () => {
      const mockResponse = {
        token: 'test-token',
        user: {
          id: 1,
          username: 'testuser',
          email: 'test@example.com',
        } as User,
      };

      (fetchAuth as jest.Mock).mockResolvedValue(mockResponse);

      const payload: LoginPayload = loginMock;
      await login(mockDispatch, payload);

      expect(fetchAuth).toHaveBeenCalledWith(payload);
      expect(localStorage.getItem('authToken')).toEqual(mockResponse.token);
      expect(localStorage.getItem('authUser')).toEqual(JSON.stringify(mockResponse.user));
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'LOGIN_SUCCESS',
        payload: mockResponse,
      });
    });

    it('should throw an error if fetchAuth fails', async () => {
      (fetchAuth as jest.Mock).mockRejectedValue(new Error('API Error'));

      const payload: LoginPayload = loginMock;

      await expect(login(mockDispatch, payload)).rejects.toThrow('API Error');
    });
  });

  describe('logout', () => {
    it('should clear localStorage and dispatch LOGOUT', () => {
      localStorage.setItem('authToken', 'test-token');
      localStorage.setItem('authUser', JSON.stringify(UserMock));

      logout(mockDispatch);

      expect(localStorage.getItem('authToken')).toBeNull();
      expect(localStorage.getItem('authUser')).toBeNull();
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'LOGOUT' });
    });
  });

  describe('loadUserFromStorage', () => {
    it('should dispatch LOGIN_SUCCESS if user and token exist in localStorage', () => {
      const mockUser = UserMock;
      const mockToken = 'test-token';

      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('authUser', JSON.stringify(mockUser));

      loadUserFromStorage(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'LOGIN_SUCCESS',
        payload: { user: mockUser, token: mockToken },
      });
    });

    it('should do nothing if localStorage does not contain user or token', () => {
      loadUserFromStorage(mockDispatch);
      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });

  describe('setUser', () => {
    it('should update localStorage and dispatch SET_USER', () => {
      const mockUser = UserMock;

      setUser(mockDispatch, mockUser);

      expect(localStorage.getItem('authUser')).toEqual(JSON.stringify(mockUser));
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_USER',
        payload: mockUser,
      });
    });
  });
});
