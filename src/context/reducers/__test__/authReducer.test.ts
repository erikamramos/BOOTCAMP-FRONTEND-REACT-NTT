import { authReducer, initialAuthState } from '@/context/reducers/authReducer';
import { AuthActions } from '@/context/types';
import { AuthState, User } from '@/models/auth';
import { UserMock } from '@/utils/__mocks__/user';

describe('authReducer', () => {
  const mockUser: User = UserMock;

  it('should handle LOGIN_SUCCESS action', () => {
    const action: AuthActions = {
      type: 'LOGIN_SUCCESS',
      payload: {
        user: mockUser,
        token: 'test-token',
      },
    };

    const expectedState: AuthState = {
      user: mockUser,
      token: 'test-token',
    };

    const result = authReducer(initialAuthState, action);
    expect(result).toEqual(expectedState);
  });

  it('should handle LOGOUT action', () => {
    const currentState: AuthState = {
      user: mockUser,
      token: 'test-token',
    };

    const action: AuthActions = {
      type: 'LOGOUT',
    };

    const expectedState: AuthState = {
      user: null,
      token: null,
    };

    const result = authReducer(currentState, action);
    expect(result).toEqual(expectedState);
  });

  it('should handle SET_USER action', () => {
    const currentState: AuthState = {
      user: null,
      token: 'test-token',
    };

    const action: AuthActions = {
      type: 'SET_USER',
      payload: mockUser,
    };

    const expectedState: AuthState = {
      user: mockUser,
      token: 'test-token',
    };

    const result = authReducer(currentState, action);
    expect(result).toEqual(expectedState);
  });
});
