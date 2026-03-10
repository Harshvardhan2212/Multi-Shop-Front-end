import { Navigate } from "react-router-dom";

const LoginProtectedRoute = ({ children, type = 'user' }) => {
  let tokenVar = (type === 'user') ? 'token' : 'adminToken';
  let token = localStorage.getItem(tokenVar);


  return <div>{!token ? children : <Navigate to={"/"} />}</div>;
};

export default LoginProtectedRoute;

