import { Link } from "react-router-dom";

export default function Navbar() {
  const user = {
    name: "Harshvardhan",
    avatar: "https://github.com/mdo.png",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">
        <div className="ms-auto dropdown">
          <button
            className="btn d-flex align-items-center border-0 bg-transparent dropdown-toggle"
            data-toggle="dropdown"
          >
            <img
              src={user.avatar}
              alt="avatar"
              width="35"
              height="35"
              className="rounded-circle me-2"
            />
            <span className="fw-semibold">{user.name}</span>
          </button>

          <div className="dropdown-menu dropdown-menu-right shadow">
            <Link className="dropdown-item" to="/admin/profile">
              My Profile
            </Link>

            <Link className="dropdown-item" to="/admin/settings">
              Settings
            </Link>

            <div className="dropdown-divider"></div>

            <button className="dropdown-item text-danger">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
