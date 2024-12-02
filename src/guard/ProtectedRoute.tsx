import { AuthContext } from '../context/store/authContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { state, isInitializing } = context;

  if (isInitializing) {
    return <div>Cargando...</div>;
  }

  if (!state.token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
