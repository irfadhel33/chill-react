function MovieCard({ image, title, badge, rating, variant = "portrait" }) {
  return (
    <article className={`movie-card movie-card--${variant}`}>
      <img src={image} alt={title} />

      {badge && (
        <span className={`movie-badge movie-badge--${badge.type}`}>
          {badge.text}
        </span>
      )}

      {variant === "landscape" ? (
        <div className="movie-card-info">
          <p>{title}</p>
          <span>★ {rating}/5</span>
        </div>
      ) : null}
    </article>
  );
}

export default MovieCard;
