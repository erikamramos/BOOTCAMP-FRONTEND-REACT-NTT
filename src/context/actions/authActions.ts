import { LoginPayload, User } from '../../models/auth';
import { fetchAuth } from '../../services/api/authServices';

export const login = async (dispatch: React.Dispatch<any>, payload: LoginPayload) => {
  const response = await fetchAuth(payload);
  localStorage.setItem('authToken', response.token);
  localStorage.setItem('authUser', JSON.stringify(response.user));

  dispatch({
    type: 'LOGIN_SUCCESS',
    payload: {
      user: response.user,
      token: response.token,
    },
  });
};

export const logout = (dispatch: React.Dispatch<any>) => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('authUser');
  dispatch({ type: 'LOGOUT' });
};

export const loadUserFromStorage = (dispatch: React.Dispatch<any>) => {
  const token = localStorage.getItem('authToken');
  const user = localStorage.getItem('authUser');
  if (token && user) {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { user: JSON.parse(user), token },
    });
  }
};

export const setUser = (dispatch: React.Dispatch<any>, user: User) => {
  localStorage.setItem('authUser', JSON.stringify(user));

  dispatch({
    type: 'SET_USER',
    payload: user,
  });
};
