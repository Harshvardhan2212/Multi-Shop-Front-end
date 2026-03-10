import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "250px", height: "100vh" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <span className="fs-4">Admin Panel</span>
      </Link>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link active">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/orders" className="nav-link link-dark">
            Orders
          </Link>
        </li>

        <li>
          <Link to="/products" className="nav-link link-dark">
            Products
          </Link>
        </li>

        <li>
          <Link to="/customers" className="nav-link link-dark">
            Customers
          </Link>
        </li>

        <li>
          <Link to="/reports" className="nav-link link-dark">
            Reports
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default Sidebar
