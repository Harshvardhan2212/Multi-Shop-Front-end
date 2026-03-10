import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, type = 'user' }) => {
  let tokenVar = (type === 'user') ? 'token' : 'adminToken';
  console.log(tokenVar)
  const token = localStorage.getItem(tokenVar);

  return <div>{!token ? <Navigate to={"signin"} /> : children}</div>;
};

export default ProtectedRoute;
