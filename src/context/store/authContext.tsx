// falta test
import { createContext, useReducer, useEffect, ReactNode, useState, Dispatch } from 'react';
import { authReducer, initialAuthState } from '../reducers/authReducer';
import { AuthState } from '../../models/auth';
import { loadUserFromStorage } from '../actions/authActions';

interface AuthContextProps {
  state: AuthState;
  dispatch: Dispatch<any>;
  isInitializing: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    loadUserFromStorage(dispatch);

    setIsInitializing(false);
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch, isInitializing }}>
      {children}
    </AuthContext.Provider>
  );
};
