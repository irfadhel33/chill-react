function MovieCard({ image, title, alt }) {
    return(
        <div className="movie-card">
            <img src={image} alt={alt} />
            <p>{title}</p>
        </div>
    );
}

export default MovieCard;