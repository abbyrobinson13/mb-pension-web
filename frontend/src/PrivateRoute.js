import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext.js';

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p> loading ...</p>;
  }
  if (!user && !loading) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
