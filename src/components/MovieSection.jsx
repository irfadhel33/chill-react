import { useRef } from "react";
import MovieCard from "./MovieCard";
import "../styles/Home.css"

function MovieSection({ title, movies }) {
  const movieListRef = useRef(null);

  function scrolLeft() {
    movieListRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    movieListRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  }
  return (
    <section className="movie-section">
      <h2>{title}</h2>

      <div className="movie-container">
        <button className="arrow left" onClick={scrolLeft}>
          ←
        </button>

        <div className="movie-list" ref={movieListRef}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              image={movie.image}
              title={movie.title}
              alt={movie.title}
              badge={movie.badge}
            />
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          →
        </button>
      </div>
    </section>
  );
}

export default MovieSection;
