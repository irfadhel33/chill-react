import {useState} from "react";
import { useNavigate, Link } from "react-router-dom";

import AuthLogo from "../components/AuthLogo";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton";
import googleLogo from "../assets/images/google-logo.png";

function Register() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const navigate = useNavigate();

function handleSubmit(event) {
  event.preventDefault();

  if (username.trim() === "" || 
      password.trim() === "" || 
      confirmPassword.trim() === ""
  ) {
    setError("Semua field harus diisi");
    return;
  }

  if (password !== confirmPassword) {
    setError("Kata sandi tidak cocok");
    return;
  }

  setError("");
  navigate("/home");
}

  return (
    <div className="login-bg">
      <main>
        <AuthLogo />
        <div className="welcome-message">
          <h1>Daftar</h1>
          <p>Selamat datang di CHILL</p>
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Username"
            type="text"
            placeholder="Masukkan Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <InputField
            label="Kata Sandi"
            type="password"
            placeholder="Masukkan Kata Sandi"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <InputField
            label="Konfirmasi Kata Sandi"
            type="password"
            placeholder="Masukkan Konfirmasi Kata Sandi"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <div className="relog-action">
            <p>
              Sudah punya akun? <Link to="/login">Masuk</Link>
            </p>
          </div>

          <div className="login-button" >
            <AuthButton loginbutton="Daftar"/>
            <p>Atau masuk dengan akun lain</p>
            <button className="google-login">
              <img src={googleLogo} alt="Google Logo" />
              Masuk 
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;
