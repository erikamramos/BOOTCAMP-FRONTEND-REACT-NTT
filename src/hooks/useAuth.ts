import { login, logout, setUser } from '../context/actions/authActions';
import { AuthContext } from '../context/store/authContext';
import { LoginPayload, User } from '../models/auth';
import { useContext } from 'react';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { state, dispatch } = context;

  const loginUser = async (payload: LoginPayload) => {
    await login(dispatch, payload);
  };

  const logoutUser = () => {
    logout(dispatch);
  };

  const updateUser = (user: User) => {
    setUser(dispatch, user);
  };

  return {
    state,
    loginUser,
    logoutUser,
    updateUser,
  };
};
