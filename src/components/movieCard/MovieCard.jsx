import PropTypes from "prop-types";
import "./movieCard.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="card-container">
      <div className="container-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
      </div>

      <div className="container-text">
        <p className="card-title">{movie.title}</p>
        <div className="container-vote">
          <img className="card-svg" src="/src/assets/star.svg" alt="star" />
          <p className="card-vote">{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired, // Validación para la prop movie
};

export default MovieCard;
