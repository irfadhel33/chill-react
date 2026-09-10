import movieLogo from "../assets/images/movie-open.png";
import chillLogo from "../assets/images/CHILL.png";

function AuthLogo() {
  return (
    <div className="top-container">
      <img className="logo" src={movieLogo} alt="Movie Logo" />

      <img className="logotext" src={chillLogo} alt="Chill Logo" />
    </div>
  );
}

export default AuthLogo;
