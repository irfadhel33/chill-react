function MovieCard({ image, title, alt, badge }) {
    return(
        <div className="movie-card">
            <img src={image} alt={alt} />
            <p>{title}</p>

            {badge && (
            <span className={`movie-badge ${badge.type}`}>
                {badge.text}
            </span>
            )}
        </div>
    );
}

export default MovieCard;