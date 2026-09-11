import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        CHILL
      </div>

      <div className="navbar-menu">
        <Link to="/">Series</Link>
        <Link to="/">Film</Link>
        <Link to="/">Daftar Saya</Link>
      </div>

      <Link to="/login" className="navbar-profile">
        Profil
      </Link>
    </nav>
  );
}

export default Navbar;