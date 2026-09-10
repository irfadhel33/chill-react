import MovieCard from "./MovieCard";

function MovieSection({ title, movies }) {
  return (
    <section>
      <h2>{title}</h2>

      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            image={movie.image}
            title={movie.title}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;
