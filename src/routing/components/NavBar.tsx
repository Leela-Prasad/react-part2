import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={"/users"} className="nav-link">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
