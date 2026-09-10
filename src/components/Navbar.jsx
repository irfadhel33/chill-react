import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h2>CHILL</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Series</Link>
          <Link to="/">Film</Link>
          <Link to="/">Daftar Saya</Link>
        </nav>
      </div>

      <div className="navbar-profile">
        <span>Profile</span>
      </div>
    </header>
  );
}

export default Navbar;