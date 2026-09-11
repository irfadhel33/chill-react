import { Link } from "react-router-dom";
import chillLogo from "../assets/images/CHILL.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img 
          src={chillLogo} 
          alt="CHILL" 
        />
        
        <p>
          © 2026 Chill. Nikmati tontonan favoritmu kapan saja.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h3>Genre</h3>
          <Link to="/">Aksi</Link>
          <Link to="/">Drama</Link>
          <Link to="/">Komedi</Link>
        </div>
        <div>
          <h3>Bantuan</h3>
          <Link to="/">FAQ</Link>
          <Link to="/">Kontak Kami</Link>
          <Link to="/">Syarat & Ketentuan</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
