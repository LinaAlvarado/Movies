import PropTypes from 'prop-types';

const MovieCard = ({movie}) => {
  return (
    <div>
      <p>{movie.title}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <p>{movie.vote_average}</p>
      <img src="/src/assets/star.svg" alt="star" />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired, // Validación para la prop movie
};

export default MovieCard;
